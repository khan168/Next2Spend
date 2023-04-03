import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import Transactions from "./components/Transactions";
import NavBar from './components/NavBar';
import Dashboard from './components/dashboard';
import React from "react";
import axios from "axios";


function App() {

  const [data, setdata] = React.useState(null);
  //check if user is logged in ? send to home : send to login page
  const user =localStorage.getItem("token")

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/userinfo", {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) => setdata(response.data))
      .catch((error) => console.log(error));
  },[]);
  
  
  return (
    <Router>
      <NavBar data={data} />
      <Routes>


        {user && <Route path="/" exact element={<Dashboard data={data}/>} />}
        <Route path="/transactions" exact element={<Transactions />} />
        <Route path="/signup" exact element={<SignUpPage />} />
        <Route path="/login" exact element={<LoginPage/>} />
        <Route path="/" exact element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
