import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Prereq from './Components/Prereq';
import Info from './Components/Info';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route index element={<Home />} />
         <Route path="home" element={<Home />} />
         <Route path="home/prereq" element={<Prereq />} />
         <Route path="home/prereq/info" element={<Info />} />
         <Route path="home/prereq/info/register" element={<Register />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="login" element={<Login />} />       
       </Routes>
    </div>
  );
}

export default App;
