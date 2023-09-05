import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  updateTodo,
} from "../Redux/actions";
import { nanoid } from "nanoid";
import Button from "./Button";
import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
} from "../Redux/actionTypes";
import axios from "axios";

function Todos() {
  const [text, setText] = useState("");
  const {
    data: todos,
    IsLoading,
    IsError,
  } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() =>{
    getTodos();
  }, [])

  async function getTodos(){
    dispatch(getTodoLoading());
    try {
        
        const res = await axios.get('http://localhost:3001/todos');
        dispatch(getTodoSuccess(res.data));

    } catch (err) {
        dispatch(getTodoError())
    }
  }

  function handleStatus(id) {
    dispatch(updateTodo(id));
  }

  async function handleAddTodo(e) {
    e.preventDefault();
    dispatch(addTodoLoading(ADD_TODO_LOADING));

    try {
      await axios.post("http://localhost:3001/todos", {
        uid: nanoid(),
        title: text,
        status: false,
      });

      dispatch(addTodoSuccess(ADD_TODO_SUCCESS));
      setText('')
    } catch (err) {
      dispatch(addTodoError(ADD_TODO_ERROR));
    }
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
        ? "Loading..."
        : IsError
        ? "Some Error Occurred"
        : todos.map((el) => {
            return (
              <div
                key={el.id}
                className="w-3/12 text-xl shadow-md shadow-green-700 border-2 border-transparent px-8 py-9 gap-4 flex flex-col justify-center items-center bg-slate-600 text-white font-mono rounded-xl hover:border-white"
              >
                <h3>{el.title}</h3>
                <p>Status:{el.status ? "Completed" : "Pending"}</p>
                <Button
                  onClick={() => {
                    handleStatus(el.id);
                  }}
                  className={
                    el.status
                      ? "text-white px-4 py-3 text-base bg-red-600 border-2 hover:border-white font-sans font-semibold hover:font-bold"
                      : "bg-green-500 text-white px-4 py-3 text-base border-2 hover:border-white font-sans font-semibold hover:font-bold"
                  }
                  text={"Update Status"}
                />
              </div>
            );
          })}
    </>
  );
}

export default Todos;
