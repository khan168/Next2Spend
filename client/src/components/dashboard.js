import React, { useState, useEffect, useRef } from 'react';
import '../styles/Dashboard.css';

function Dashboard(){
    const [amount, setAmount] = useState("");
    const [maxDate, setMaxDate] = useState("");
    const [reason,setReason]=useState("");
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(maxDate);
        console.log(reason);
        console.log(amount);
        toggleForm()
    }
    
      

      const handleAmountChange = (event) => {
        let inputValue = event.target.value;
        // remove all non-numeric characters except htmlFor decimal point
        inputValue = inputValue.replace(/[^0-9.]/g, '');
        // make sure there's only one decimal point
        inputValue = inputValue.replace(/(\..*)\./g, '$1');
        // parse the input value as a number
        const parsedAmount = parseFloat(inputValue);
        // format the parsed amount as a currency string
        const formattedAmount = parsedAmount.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        });
        setAmount(formattedAmount);
      };

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setMaxDate(today);
    }, []);
    

    const [showModal, setShowModal] = useState(false);

    const toggleForm = () => {
        setShowModal(!showModal);
    };

    return (
      <div className="dashboard">
        {showModal && (
          <div className="popupForm">
            <form
            onSubmit={handleSubmit}
              className="addForm"
              id="addTransaction"
            >
              <button className="btn" onClick={toggleForm}>
                Exit
              </button>
              <label htmlFor="amount">Amount: </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e)=>handleAmountChange(e)}
              />
              <label htmlFor="reason">Reason: </label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={reason}
                placeholder="i wanted to eat"
                onChange={(e) => setReason(e.target.value)}
                required
              />{" "}
              <br />
              <label htmlFor="date">Date: </label>
              <input
                type="date"
                id="date"
                name="date"
                max={maxDate}
                required
              />{" "}
              <br />
              <button
                className="btn"
              >
                ADD
              </button>
            </form>
          </div>
        )}
        <div className="leftSide">
          <div className="menu">
            <ul className="menuList">
              <li>
                <a href="/">Dashboard</a>
              </li>
              <li>
                <a href="/transactions">Transactions</a>
              </li>
              <li>
                <a href="/">Wallet</a>
              </li>
              <button onClick={handleLogout} className="LogoutButton">
                Logout
              </button>
            </ul>
          </div>
          {showModal && <div className="overlay"></div>}
        </div>
        <div className="rightSide">
          <div className="dashboardContainer">
            <div className="moneyContainer">
              <div className="moneyLeft">
                <h3>Money Left:</h3>
                <p>$10,000</p>
              </div>
              <div className="addTransactionButton">
                <button className="add" onClick={toggleForm}>
                  Add Transaction
                </button>
              </div>
            </div>

            <div className="spendingsConatiner">
              <h3>Latest Spendings:</h3>
              <ul className="spendings">
                <li className="spending">
                  <p className="date">March 14, 2023</p>
                  <p className="title">Spotify Premium</p>
                  <p className="amount">$10</p>
                </li>
                <li className="spending">
                  <p className="date">March 15, 2023</p>
                  <p className="title">Spotify Premium</p>
                  <p className="amount">$10</p>
                </li>
                <li className="spending">
                  <p className="date">March 16, 2023</p>
                  <p className="title">Spotify Premium</p>
                  <p className="amount">$10</p>
                </li>
                <li className="spending">
                  <p className="date">March 14, 2023</p>
                  <p className="title">Spotify Premium</p>
                  <p className="amount">$10</p>
                </li>
                <li className="spending">
                  <p className="date">March 14, 2023</p>
                  <p className="title">Spotify Premium</p>
                  <p className="amount">$10</p>
                </li>
                <li className="spending">
                  <p className="date">March 14, 2023</p>
                  <p className="title">Spotify Premium</p>
                  <p className="amount">$10</p>
                </li>
                <li className="spending">
                  <p className="date">March 14, 2023</p>
                  <p className="title">Spotify Premium</p>
                  <p className="amount">$10</p>
                </li>
                <li className="spending">
                  <p className="date">March 14, 2023</p>
                  <p className="title">Spotify Premium</p>
                  <p className="amount">$10</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;