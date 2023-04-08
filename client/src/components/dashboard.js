
import React, { useState, useEffect} from 'react';
import '../styles/Dashboard.css';
import axios from "axios";
import { Link } from 'react-router-dom';

function Dashboard(){
    const [list,setList] = useState([]);
    const [amount, setAmount] = useState("");
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
        const amount = parseInt(e.target[0].value.slice(1));
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
              <label htmlFor="amount">Amount: </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => handleAmountChange(e)}
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
}

export default Dashboard;