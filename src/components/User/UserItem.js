import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {Text} from 'rebass'

import Button from "../Button/Button";
import "./UserItem.css";

const UserItem = (props) => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const updateHandler = (userId) => {
    navigate("/update-user/" + userId);
  };
  const deleteHandler = (userId) => {
    navigate("/delete-user/" + userId);
  };
  return (
    <div className="container">
      <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='#24a392'
  alignItems='center'
  > 
  Users
</Text>
    
      <ul className="responsive-table">
        <li key="header" className="table-header">
          <div key="Hcol-1" className="col col-1">
            First Name
          </div>
          <div key="Hcol-2" className="col col-2">
            Last Name
          </div>
          <div key="Hcol-3" className="col col-3">
            Age
          </div>
          <div key="Hcol-4" className="col col-4">
            Gender
          </div>
          <div key="Hcol-5" className="col col-5">
            Height
          </div>
          <div key="Hcol-6" className="col col-6">
            Edit
          </div>
          <div key="Hcol-7" className="col col-7">
            Delete
          </div>
        </li>
        {users.map((item) => (
          <li className="table-row" key={Math.random().toString()}>
            <div key="col-1" className="col col-1" data-label="Job Id">
              {item.firstName}
            </div>
            <div key="col-2" className="col col-2" data-label="Customer Name">
              {item.lastName}
            </div>
            <div key="col-3" className="col col-3" data-label="Amount">
              {item.age}
            </div>
            <div key="col-4" className="col col-4" data-label="Payment Status">
              {item.gender}
            </div>
            <div key="col-5" className="col col-5" data-label="Payment Status">
              {item.height}
            </div>
            <Button
              key="col-6"
              className="col col-6"
              data-label="Payment Status"
              onClick={updateHandler.bind(this, item.id)}
            >
              Edit
            </Button>
            <Button
              key="col-7"
              className="col col-7"
              data-label="Payment Status"
              onClick={deleteHandler.bind(this, item.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserItem;
