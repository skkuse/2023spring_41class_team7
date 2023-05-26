import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCourse from "./pages/AddCourse";
import UserInstructor from "./pages/UserInstructor";
import ModifyCourse from "./pages/ModifyCourse";
import QuizPage from "./pages/Quiz";
import MainPage from "./pages/Main";
import StudentPage from "./pages/Student";
import LearningPage from "./pages/Learning";
import { useState } from "react";

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
          <Route
            path="/login"
            element={
              <Login
                loggedin={loggedin}
                setLoggedin={setLoggedin}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/user/instructor"
            element={
              <UserInstructor
                loggedin={loggedin}
                setLoggedin={setLoggedin}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
          <Route
            path="/add"
            element={
              <AddCourse
                loggedin={loggedin}
                setLoggedin={setLoggedin}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
          <Route
            path="/modify"
            element={
              <ModifyCourse
                loggedin={loggedin}
                setLoggedin={setLoggedin}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <QuizPage
                loggedin={loggedin}
                setLoggedin={setLoggedin}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
          <Route
            path="/main"
            element={
              <MainPage
                loggedin={loggedin}
                setLoggedin={setLoggedin}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
          <Route
            path="/user/student"
            element={
              <StudentPage
                loggedin={loggedin}
                setLoggedin={setLoggedin}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
          <Route
            path="/learning"
            element={
              <LearningPage
                loggedin={loggedin}
                setLoggedin={setLoggedin}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
