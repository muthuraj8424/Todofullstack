import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import Updatetodo from "./Edit"
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/update/:id" element={<Updatetodo/>} />



      </Routes>
    </Router>
  );
}

export default App;
