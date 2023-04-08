import React from "react";
import "../styles/Transactions.css";

function Transactions() {
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
                    <input type="search" placeholder="Search here" />
                </div>
                <ul className='spendings'>
                    <li className='spending'>
                        <p className='date'>March 14, 2023</p>
                        <p className='title'>Spotify Premium</p>
                        <p className='amount'>$10</p>
                    </li>
                    <li className='spending'>
                        <p className='date'>March 15, 2023</p>
                        <p className='title'>Spotify Premium</p>
                        <p className='amount'>$10</p>
                    </li>
                    <li className='spending'>
                        <p className='date'>March 16, 2023</p>
                        <p className='title'>Spotify Premium</p>
                        <p className='amount'>$10</p>
                    </li>
                    <li className='spending'>
                        <p className='date'>March 14, 2023</p>
                        <p className='title'>Spotify Premium</p>
                        <p className='amount'>$10</p>
                    </li>
                    <li className='spending'>
                        <p className='date'>March 14, 2023</p>
                        <p className='title'>Spotify Premium</p>
                        <p className='amount'>$10</p>
                    </li>
                    <li className='spending'>
                        <p className='date'>March 14, 2023</p>
                        <p className='title'>Spotify Premium</p>
                        <p className='amount'>$10</p>
                    </li>
                    <li className='spending'>
                        <p className='date'>March 14, 2023</p>
                        <p className='title'>Spotify Premium</p>
                        <p className='amount'>$10</p>
                    </li>
                    <li className='spending'>
                        <p className='date'>March 14, 2023</p>
                        <p className='title'>Spotify Premium</p>
                        <p className='amount'>$10</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        
       
    </div>
  );
}

export default Transactions;
