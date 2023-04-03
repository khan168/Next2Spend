import React from "react";
import "../styles/Transactions.css";

function Transactions() {
  return (
    <div className="transactionsPage">
        <div className="transactionsContainer">
        <h1>Transactions</h1>
        <div className='spendingsConatiner'>
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
  );
}

export default Transactions;
