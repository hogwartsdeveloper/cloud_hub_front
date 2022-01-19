import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import Navbar from './components/navbar/Navbar';
import WelcomePage from "./components/WelcomePage";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Registration />} />
        </Routes>   
    </BrowserRouter>
    
  );
}

export default App;
