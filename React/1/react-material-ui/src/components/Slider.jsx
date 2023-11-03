import { Hidden } from "@mui/material";
import { useState } from "react";

function Slider() {
    const [id, setId] = useState(2);

    function handleId(){
        setId(id + 1);
    }

  return (
    <>
      <div
        style={{
          width: "1100px",
          height: "300px",
          marginLeft: "30px",
          display: "flex",
          overflow: "hidden",
          border: "2px solid black",
        }}
      >
        <div
          id={1}
          style={{
            minWidth: "40%",
            height: "100%",
            backgroundColor: "red",
          }}
        ></div>
        <div
          id={2}
          style={{
            minWidth: "40%",
            height: "100%",
            backgroundColor: "green",
          }}
        ></div>
        <div
          id={3}
          style={{
            minWidth: "40%",
            height: "100%",
            backgroundColor: "blue",
          }}
        ></div>
        <div
          id={4}
          style={{
            minWidth: "40%",
            height: "100%",
            backgroundColor: "yellow",
          }}
        ></div>
        <div
          id={5}
          style={{
            minWidth: "40%",
            height: "100%",
            backgroundColor: "pink",
          }}
        ></div>
        <div
          id={6}
          style={{
            minWidth: "40%",
            height: "100%",
            backgroundColor: "orange",
          }}
        ></div>
        <div
          id={7}
          style={{
            minWidth: "40%",
            height: "100%",
            backgroundColor: "black",
          }}
        ></div>
      </div>

      <a onClick={handleId} href={id}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
            borderRadius: "20px",
          }}
        ></div>
      </a>
      <a onClick={handleId} href={id}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
            borderRadius: "20px",
          }}
        ></div>
      </a>
    </>
  );
}

export default Slider;
