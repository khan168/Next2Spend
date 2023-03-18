import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
