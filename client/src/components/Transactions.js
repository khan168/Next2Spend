import React from "react";
import "../styles/Transactions.css";
import axios from "axios";
import { useState } from "react";
import { SingleTransaction } from "./Transaction";


function Transactions() {
  const user = localStorage.getItem("token");
  const [list, setList] = useState([]);
  const [searchvalue,setsearchvalue]=useState("");
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

  const filteredList=list.filter((ele)=>(ele.title.toLowerCase().includes(searchvalue.toLowerCase())));
  return (
    <div className="transactionsPage">
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
                </ul>
            </div>
        </div>
        <div className="rightSide">
            <div className="transactionsContainer">
            <h1>Transactions</h1>
            <div className='spendingsConatiner'>
                <div className="searchBar">
                    <input type="search" placeholder="Search here"  onChange={(e)=>{setsearchvalue(e.target.value)}} value={searchvalue}></input>
                    <i className="gg-search"></i>
                </div>
                <ul className='spendings'>
                    {filteredList.map((e, i) => {
              return <SingleTransaction key={i} prop2={e} func={fetchdata}></SingleTransaction>;
            })}
                </ul>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Transactions;
