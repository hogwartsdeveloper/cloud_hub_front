import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { auth } from './actions/user';
import './app.css';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import Disk from './components/disk/Disk';
import Navbar from './components/navbar/Navbar';
import WelcomePage from "./components/WelcomePage";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
        <Navbar />
        {!isAuth ?
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signIn" element={<Login />} />
            <Route path="/signUp" element={<Registration />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          :
          <Routes>
            <Route path="/" element={<Disk />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        }
    </BrowserRouter>
    
  );
}

export default App;
