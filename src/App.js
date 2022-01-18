import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Login from './components/authorization/Login';
import Navbar from './components/navbar/Navbar';
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>   
    </BrowserRouter>
    
  );
}

export default App;
