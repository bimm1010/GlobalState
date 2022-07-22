import { useStore } from './store'
import { actions } from './store';
import { useRef, useState } from 'react'

function App() {
  const [state, dispatch] = useStore()
  const { todoInput, todos } = state
  const [isEdit, setIsEdit] = useState(false)
  const [indexInput, setIndexInput] = useState(0)
  const focusInput = useRef()
  console.log(state);


  const handleEdit = index => {
    setIsEdit(true)
    dispatch(actions.getInput(todos[index]))
    focusInput.current.focus()
  }

  const handleUpdate = () => {
    if (todoInput !== '') {
      dispatch(actions.ChangeTodo(indexInput, todoInput))
      dispatch(actions.getInput(''))
      setIsEdit(false)
    } else {
      setIsEdit(false)
    }
  }

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.getInput(''))
    focusInput.current.focus()
  }


  return (
    <div style={{ padding: 50 }}>
      <input
        value={todoInput}
        ref={focusInput}
        placeholder={"enter todo job..."}
        onChange={(e) => dispatch(actions.getInput(e.target.value))}
      />
      <button
        onClick={isEdit ? handleUpdate : handleAdd}>
        {isEdit ? "Update" : "ADD"}
      </button>
      <div style={{color: "red"}}>
        {todos.length > 0 ? "Double Click your Job to Edit" : ""} 
      </div>

      {todos.map((todo, index) => (
        <li
          key={index}
          onDoubleClick={() => {
            handleEdit(index)
            setIndexInput(index)
          }}>
          {todo}
          <span onClick={() => dispatch(actions.deleteTodo(index))}> &times;</span>
        </li>
      ))}
    </div>
  );
}

export default App;
