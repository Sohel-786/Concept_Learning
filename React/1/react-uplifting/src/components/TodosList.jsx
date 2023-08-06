import { buildQueries } from "@testing-library/react";

function TodosList({list, handletodo}) {

    return <>
        {
            list.map((el) => {
                return <div key = {el.id} style={{
                    border : "1px solid blue",
                    padding : "10px",
                    width : "50%",
                    margin : "10px",
                    display : "flex",
                    justifyContent : "center"
                }}>
                    <h1> {el.todo} <button style={{
                        marginLeft : '100px'
                    }} onClick={()=>{
                        handletodo(el);
                    }}>{el.status ? 'Undone' : 'Done'}</button> </h1>
                </div>
            })
        }
    </>
}

export default TodosList;