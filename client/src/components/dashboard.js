import React from "react";
import '../styles/Dashboard.css';

function Dashboard(){
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };

    return (
        <div className='dashboard'>
            <div className='leftSide'>
                <div className='menu'>
                    <ul className='menuList'>
                        <li>Dashboard</li>
                        <li>Transactions</li>
                        <li>Wallet</li>
                        <button onClick={handleLogout} className="LogoutButton">
                        Logout
                        </button>
                    </ul>
                </div>
            </div>
            <div className='rightSide'>
                <div className='dashboardContainer'>
                    <div className='moneyContainer'>
                        <div className='moneyLeft'>
                            <h3>Money Left:</h3>
                            <p>$10,000</p>
                        </div>
                        <div className='cardInfo'>
                            <p className='fourDigits'>*1234</p>
                            {/* <img src="./public/Visa_Logo.png" alt='logo'></img> */}
                        </div>
                    </div>
                   
                    <div className='spendingsConatiner'>
                        <h3>Latest Spendings:</h3>
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
    )
}

export default Dashboard;