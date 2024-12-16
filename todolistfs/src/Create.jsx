import React from "react";
import { useState } from "react";
import axios from "axios";

function Create() {
  const [task, settask] = useState("");
  const handleAdd = () => {
    if (task.trim().length) {
      axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        location.reload(), console.log(result);
      })
      .catch((err) => console.log(err));
    }
    else
    alert("Input cannot be empty")
    
  };
  return (
    <div className="createform">
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => {
          settask(e.target.value);
        }}
      />
      <button type="button" onClick={handleAdd} >
        Add
      </button>
    </div>
  );
}

export default Create;
