import logo from './logo.svg';
import './App.css';
import Chatting from './components/Chatting';
import SubChapterModal from './components/SubChapterModal';
import SubSectionModal from './components/SubSectionModal';
import RegisterPage from './pages/Register';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
