import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateStudent from "./components/createStudent";
import Student from "./components/Student";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
