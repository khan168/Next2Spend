import React from "react";
import "../styles/Transactions.css";
import axios from "axios";
import { useState } from "react";
import { SingleTransaction } from "./Transaction";


function Transactions() {
  const user = localStorage.getItem("token");
  const [list, setList] = useState([]);
  React.useEffect(() => {
    //get all transactions
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get("http://localhost:5000/api/transactions", {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) => setList(response.data.transaction))
      .catch((error) => console.log(error));
  };

  return (
    <div className="transactionsPage">
      <div className="transactionsContainer">
        <h1>Transactions</h1>
        <div className="spendingsConatiner">
          <ul className="spendings">
            {list.map((e, i) => {
              return <SingleTransaction key={i} prop2={e} func={fetchdata}></SingleTransaction>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
