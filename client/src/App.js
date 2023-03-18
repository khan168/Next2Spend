import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Dashboard from './components/dashboard';


function App() {

  //check if user is logged in ? send to home : send to login page
  const user =localStorage.getItem("token")

  return (
    <Router>
      <NavBar />
      <Routes>

        {user && <Route path="/" exact element={<Dashboard />} />}
        <Route path="/signup" exact element={<SignUpPage />} />
        <Route path="/login" exact element={<LoginPage/>} />
        <Route path="/" exact element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
