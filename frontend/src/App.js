import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCourse from "./pages/AddCourse";
import UserInstructor from "./pages/UserInstructor";
import ModifyCourse from "./pages/ModifyCourse";
import QuizPage from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user/instructor" element={<UserInstructor />}></Route>
          <Route path="/add" element={<AddCourse />}></Route>
          <Route path="/modify" element={<ModifyCourse />}></Route>
          <Route path="/quiz" element={<QuizPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
