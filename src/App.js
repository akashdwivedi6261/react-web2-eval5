import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Posts from './Components/Posts';
import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Navbar />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<Post />} />
        <Route path="posts" element={<Posts />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
