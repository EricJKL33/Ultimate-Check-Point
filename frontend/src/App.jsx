import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Student from "./components/Student";
import UpdateStudent from "./components/UpdateStudent";
import CreateStudent from "./components/CreateStudent";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
