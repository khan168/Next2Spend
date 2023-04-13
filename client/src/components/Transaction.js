import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const SingleTransaction = (props) => {
    const [Click,setClick]=useState(false);
    const token = localStorage.getItem("token");

    const handleDelete = () => {
      axios
        .delete(`http://localhost:5000/api/transactions/${props.prop2._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          props.func(); // call the `func` prop to update the list
          handleClick();
        })
        .catch((error) => console.log(error));
    };

    const handleClick = () => {
      setClick(!Click)// Handle the delete action
    };

  return (
    <div className="spendingContainer">
      <li className="spending">
        <p className="date">{props.prop2.transactionDate}</p>
        <p className="title">{props.prop2.title}</p>
        <p className="amount">${props.prop2.amount}</p>
        <button className="btn-delete">
          <i onClick={handleClick} className="gg-trash"></i>
        </button>
      </li>
      <div className='btns-confirm' >
        {Click && <button className="btn-confirm" onClick={handleDelete}>Confirm</button>}
        {Click && <button className='btn-close' onClick={handleClick}>Close</button>}
      </div>
    </div>
  );
}
