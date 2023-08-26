import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from "../Contexts/AuthContext";

function Todos(){
    const { handleTheme, theme } = useContext(ThemeContext);
    const { login } = useContext(AuthContext);

    return <>
        <h1>Theme : {theme}</h1>
        <button onClick={handleTheme}>Add</button>

        <button onClick={login}>Print Console</button>
    </>
}

export default Todos;