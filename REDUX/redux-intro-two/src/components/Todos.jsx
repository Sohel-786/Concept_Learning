import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  getTodoAction,
  handleTodostatusAction,
} from "../Redux/Todos/actions";
import Button from "./Button";

function Todos() {
  const [text, setText] = useState("");
  const {
    data: todos,
    IsLoading,
    IsError,
    IsUpdating,
    IsErrorUpdating
  } = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getTodoAction());
  }, [])


//  async function getTodos(){
//       dispatch(getTodoAction());
//   }

  // add actions for the status update

 async function handleStatus(id, status) {
        // dispatch(updateTodoLoading());
        // try{

        //    await axios.patch(`http://localhost:3001/todos/${id}`, { status : !status })
        //    const res = await axios.get('http://localhost:3001/todos');
        //    dispatch(updateTodoSuccess());
        //    dispatch(getTodoSuccess(res.data));

        // }catch(err){
        //     dispatch(updateTodoError());
        // }   

        dispatch(handleTodostatusAction(id,status));
  }

  async function handleAddTodo(e) {
    e.preventDefault();
    dispatch(addTodoAction(text));
    setText('')
  }

  return (
    <>
      <form
        className="w-7/12 flex flex-col justify-center items-center"
        onSubmit={handleAddTodo}
      >
        <input
          className="px-4 py-3 w-2/3 border-b-2 border-blue-600 focus:outline-none"
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Enter Your Todo"
          value={text}
        />
        <Button text={"ADD"} />
      </form>

      {IsLoading
        ? <div className="flex"> Loading...<div className="w-9 h-9 bg-gray-500 animate-spin"></div></div>
        : IsError
        ? "Some Error Occurred"
        : <div className="w-full flex justify-center items-center gap-5 flex-wrap py-6">{todos.map((el) => {
            return (
              <div
                key={el.id}
                className="md:w-3/12 text-xl shadow-md shadow-green-700 border-2 border-transparent px-8 py-9 gap-4 flex flex-col justify-center items-center bg-slate-600 text-white font-mono rounded-xl hover:border-white"
              >
                <h3>{el.title}</h3>
                <p>Status:{el.status ? "Completed" : "Pending"}</p>
                <Button
                  onClick={() => {
                    handleStatus(el.id, el.status);
                  }}
                  className={
                    IsUpdating
                    ? 'text-white px-4 py-3 text-base bg-blue-500 border-2 border-white font-sans font-semibold hover:font-bold flex justify-center items-center'
                    :el.status
                      ? "text-white px-4 py-3 text-base bg-red-600 border-2 hover:border-white font-sans font-semibold hover:font-bold"
                      : "bg-green-500 text-white px-4 py-3 text-base border-2 hover:border-white font-sans font-semibold hover:font-bold"
                  }
                  text={ IsUpdating ? <>Loading...<div className="w-4 h-4 bg-white animate-spin"></div></>  : "Update Status"}
                />
              </div>)
            })}</div>
        }
    </>
  );
}

export default Todos;
