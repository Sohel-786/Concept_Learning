import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

function Todos(){
    const { handleTheme, theme } = useContext(ThemeContext);

    return <>
        <h1>Theme : {theme}</h1>
        <button onClick={handleTheme}>Add</button>
    </>
}

export default Todos;