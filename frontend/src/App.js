import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { CodeEditorCpp } from './components/CodeEditor';
import Header from './components/Header';
import SearchHeader from './components/SearchHeader';
import QuizPage from './pages/Quiz';


function App() {
  return(
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/quiz" element={<QuizPage/>}></Route>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
