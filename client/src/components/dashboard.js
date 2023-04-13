import React, { useState, useEffect} from 'react';
import '../styles/Dashboard.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import "../styles/pie.css";
import * as d3 from "d3";

function Dashboard() {
    const [list,setList] = useState([]);
    const [maxDate, setMaxDate] = useState("");
    const [reason,setReason]=useState("");
    const [selectedOption, setSelectedOption] = useState("option1");
    const user = localStorage.getItem("token");
    React.useEffect(()=>{
      fetchdata();
      // Create a dataset of pets and the amount of people that own them
    },[])

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };

    const fetchdata = ()=>{
    axios
      .get("http://localhost:5000/api/transactions", {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) =>{
        let dataSet = [
          { subject: "Food", count: 0 },
          { subject: "Clothing", count: 0 },
          { subject: "School", count: 0 },
          { subject: "Others", count: 0 },
        ];
        setList(response.data.transaction);
        const newlist = response.data.transaction;
        var total = 0;
        newlist.forEach((e) => {
          total += e.amount;
          if (e.category === "food") {
            dataSet[0].count = dataSet[0].count + e.amount;
          } else if (e.category === "clothing") {
            dataSet[1].count = dataSet[1].count + e.amount;
          } else if (e.category === "school") {
            dataSet[2].count = dataSet[2].count + e.amount;
          } else {
            dataSet[3].count = dataSet[3].count + e.amount;
          }
        });
        // Bar Chart:
        const getMax = () => {
          // Calculate the maximum value in the DataSet
          let max = 0;
          dataSet.forEach((dt) => {
            if (dt.count > max) {
              max = dt.count;
            }
          });
          return max;
        };
        // Generate a p tag for each element in the dataSet with the text: Subject: Count
        d3.select("#pgraphs")
          .selectAll("h")
          .data(dataSet)
          .enter()
          .append("h")
          .text(
            (dt) =>
              dt.subject + ": " + Math.round((100 * dt.count) / total) + " "
          );
          
        // Create each of the bars and then set them all to have the same height(Which is the max value)
        d3.select("#BarChart")
          .selectAll("div")
          .data(dataSet)
          .enter()
          .append("div")
          .classed("bar", true)
          .style("height", `${getMax()}px`);

        //Transition the bars into having a height based on their corresponding count value
        d3.select("#BarChart")
          .selectAll(".bar")
          .transition()
          .duration(1000)
          .style("height", (bar) => `${(bar.count / total) * 100}px`)
          .style("width", "90px")
          .style("margin-right", "10px")
          .delay(300); // Fix their width and margin

        // Append the text to the p tag with the updated dataset
        d3.select("#pgraphs")
          .selectAll("h")
          .data(dataSet)
          .text(
            (dt) =>
              dt.subject + ": " + Math.round((100 * dt.count) / total) + " "
          );
      })
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
        const data = { amount:amount, title: reason, transactionDate:maxDate,category:selectedOption};
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
              <p>Please select your transaction category:</p>
              <br />
              <div>
                <div>
                  <label for="option1">Food</label>
                  <input
                    type="radio"
                    id="option1"
                    name="option"
                    value="food"
                    onChange={handleOptionChange}
                  />
                </div>
                <div>
                  <label for="option2">Clothing</label>
                  <input
                    type="radio"
                    id="option2"
                    name="option"
                    value="clothing"
                    onChange={handleOptionChange}
                  />
                </div>
                <div>
                  <label htmlFor="option3">School</label>
                  <input
                    type="radio"
                    id="option3"
                    name="option"
                    value="school"
                    onChange={handleOptionChange}
                  />
                </div>
                <div>
                  <label for="option4">other</label>
                  <input
                    type="radio"
                    id="option4"
                    name="option"
                    value="other"
                    onChange={handleOptionChange}
                  />
                </div>
              </div>
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
            <div className="ContainerLatestSpending">
              <div className="spendingsConatiner">
                <div id="BarChart"></div>
                <div id="pgraphs"></div>
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
      </div>
    );
};

export default Dashboard;