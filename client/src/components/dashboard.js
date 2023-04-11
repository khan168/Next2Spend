import React, { useState, useEffect} from 'react';
import '../styles/Dashboard.css';
import axios from "axios";
import { Link } from 'react-router-dom';

function Dashboard() {
    const [list,setList] = useState([]);
    const [maxDate, setMaxDate] = useState("");
    const [reason,setReason]=useState("");
    const user = localStorage.getItem("token");
    React.useEffect(()=>{
        //get all transactions
        fetchdata();
    },[])

    const fetchdata = ()=>{
    axios
      .get("http://localhost:5000/api/transactions", {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) => setList(response.data.transaction))
      .catch((error) => console.log(error));
    }

    const sum = list.reduce((total, item) => total + item.amount, 0);
    const shortlist = list.slice(-5);
    const handleSubmit=(e)=>{
        e.preventDefault();

        //create transaction
        const amount = parseFloat(e.target[0].value.replace(/[^0-9.-]+/g, "")).toFixed(2);
        const reason = e.target[1].value;
        const maxDate = e.target[2].value;
        const data = { amount:amount, title: reason, transactionDate:maxDate };
        axios
          .post("http://localhost:5000/api/transactions", data, {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          })
          .then((response) => {
            fetchdata();
            toggleForm();
          })
          .catch((error) => {
            console.error(error);
          });
          
    }

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setMaxDate(today);
    }, []);
    
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState(0);
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
              <label htmlFor="amount">Amount: </label>
              <div className='inputAmount'>
                <span>$</span>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    step="0.01"
                    min="0"
                    // prefix="$"
                    placeholder="0.00"
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    required
                />
              </div>
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
              <div className="btns">
                <button className="btn">ADD</button>
                <button className="btn-exit" onClick={toggleForm}>
                  EXIT
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="leftSide">
          <div className="menu">
            <ul className="menuList">
              <li>
                <Link to="/" className="ButtonLink">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/transactions" className="ButtonLink">
                  Transactions
                </Link>
              </li>
            </ul>
          </div>

          {showModal && <div className="overlay"></div>}
        </div>
        <div className="rightSide">
          <div className="dashboardContainer">
            <div className="moneyContainer">
              <div className="moneyLeft">
                <h3>Money Left: ${sum}</h3>
              </div>
              <div className="cardInfo">
                <div className="addTransactionButton">
                  <button className="add" onClick={toggleForm}>
                    Add Transaction
                  </button>
                </div>
              </div>
            </div>
            <div className="spendingsConatiner">
              <h3>Latest Spendings:</h3>
              <ul className="spendings">
                {shortlist.map((e, i) => {
                  return (
                    <li className="spending" key={i}>
                      <p className="date">{e.transactionDate}</p>
                      <p className="title">{e.title}</p>
                      <p className="amount">${e.amount}</p>
                    </li>
                  );
                })}
              </ul>
              <h1>....</h1>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;