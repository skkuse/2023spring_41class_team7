import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AddCourse from './pages/AddCourse';
import ManageCourse from './pages/ManageCourse';
import UserInstructor from './pages/UserInstructor';
import InstructorCourseCard from './components/InstructorCourseCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/user/instructor" element={<UserInstructor/>}></Route>
        <Route path="/addcourse" element={<AddCourse/>}></Route>
        <Route path="/mngcourse" element={<ManageCourse/>}></Route>
        <Route path="/coursecard" element={<InstructorCourseCard/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
