import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Edit() {
  const navigate = useNavigate();
  // const [task, settask] = useState("");
  const [name, setname] = useState([])
  const {id }= useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3001/update/"+id)
      .then((res) => {
        console.log(res)
        console.log(res.data[0].task)
        setname(res.data[0].task)
      })
      .catch((err) => console.log(err));
  },[id]);
  const handleEdit = () => {
    axios.put("http://localhost:3001/update/" + id, { name })
    .then((res)=>console.log(res)
    ).catch((err)=>console.log(err)
    )
    navigate("/");
    window.location.reload()
  };
  return (
    <div className="createform">
      <input
        type="text"
        placeholder="enter text"
        value={name}
        onChange={(e) => {
          // console.log(e.target.value);
          setname(e.target.value);
        }}
      />
      <button type="button" onClick={handleEdit}>
        update
      </button>
    </div>
  );
}

export default Edit;
