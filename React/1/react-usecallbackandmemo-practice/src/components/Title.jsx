import { memo } from "react"

function Title({el, handleToggle}){
    console.log(el.title)
    return (
        <>
        <h3>{el.title} - {`${el.status}`}</h3>
        <button onClick={() =>{
            handleToggle(el.id)
        }}>Toggle</button>
        </>
    )
}

export default memo(Title);