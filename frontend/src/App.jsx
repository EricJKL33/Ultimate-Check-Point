import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Student from "./components/Student";
import UpdateStudent from "./components/UpdateStudent";
import CreateStudent from "./components/createStudent";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
