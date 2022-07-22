
import { useContext } from "react";
import Context from "./Context";


//export ra 1 cái hook
export const  useStore = () => {
    const [state, dispatch] = useContext(Context)
    return [state, dispatch]
}