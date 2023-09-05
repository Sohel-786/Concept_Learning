import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actions";
import { nanoid } from "nanoid";
import Button from "./Button";

function Todos() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <form
        className="w-7/12 flex flex-col justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo({ id: nanoid(), title: text, status: false }));
        }}
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

      {todos.map((el) => {
        return (
          <div
            key={el.id}
            className="w-3/12 text-xl shadow-md shadow-green-700 border-2 border-transparent px-8 py-9 gap-4 flex flex-col justify-center items-center bg-slate-600 text-white font-mono rounded-xl hover:border-white"
          >
            <h3>{el.title}</h3>
            <p>Status:{el.status ? "Completed" : "Pending"}</p>
            <Button
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
