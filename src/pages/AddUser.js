import React from "react";
import { useNavigate } from "react-router-dom";
import AddUser from "../components/User/AddUser";

const AddUserPage = () => {
  const navigate = useNavigate();
  const cancelEditHandler = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <AddUser onCancelEdit={cancelEditHandler} />
    </React.Fragment>
  );
};

export default AddUserPage;
