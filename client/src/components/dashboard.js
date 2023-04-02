import React, { useState } from "react";
import '../styles/Dashboard.css';
import axios from "axios";

function Dashboard(){
    const [list,setList] = useState([])
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };
    const user = localStorage.getItem("token");
    React.useEffect(()=>{
        //get all transactions
        axios
          .get("http://localhost:5000/api/transactions", {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          })
          .then((response) => setList(response.data.transaction))
          .catch((error) => console.log(error));
    },[])

    const sum = list.reduce((total, item) => total + item.amount, 0);

    return (
      <div className="dashboard">
        <div className="leftSide">
          <div className="menu">
            <ul className="menuList">
              <li>Dashboard</li>
              <li>Transactions</li>
              <li>Wallet</li>
              <button onClick={handleLogout} className="LogoutButton">
                Logout
              </button>
            </ul>
          </div>
        </div>
        <div className="rightSide">
          <div className="dashboardContainer">
            <div className="moneyContainer">
              <div className="moneyLeft">
                <h3>Money Left:</h3>
                <p>${sum}</p>
              </div>
              <div className="cardInfo"></div>
            </div>

            <div className="spendingsConatiner">
              <h3>Latest Spendings:</h3>
              <ul className="spendings">
                {list.map((e, i) => {
                  return <li className='spending' key={i}>
                                <p className='date'>12-1-21</p>
                                <p className='title'>{e.title}</p>
                                <p className='amount'>${e.amount}</p>
                            </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;