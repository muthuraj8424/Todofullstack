import React, { useEffect } from "react";
import Create from "./Create";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [todo, settodo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => settodo(result.data))
      .catch((err) => console.log(err));
  }, []);

  // const handleEdit = (id) => {
  //   axios
  //     .put("http://localhost:3001/update/" + id)
  //     .then((result) => {
  //       location.reload();
  //     })
  //     .catch((err) => console.log(err));
  // };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  // const handleEdit=(id)=>{
  //   axios.put("http://localhost:3001/delete/" + id,{})
  // }
  return (
    <div className="home">
      <h2>Todo list</h2>

      <Create />
      <div className="datacontainer">
        {todo.length === 0 ? (
          <div>
            <h2>No record</h2>
          </div>
        ) : (
          todo.map((todo) => (
            <div
              className="data"
              // onClick={() => handleEdit(todo._id)}
              key={todo._id}
            >
              <p>{todo.task}</p>
              {/*  */}
              {/* <button className="button" onClick={() => handleEdit(todo._id)}>
                update
              </button> */}
              <div>
                <button>
                  <Link to={`/update/${todo._id}`} className="button">
                    Edit
                  </Link>
                </button>

                <button
                  className="button"
                  onClick={() => handleDelete(todo._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
