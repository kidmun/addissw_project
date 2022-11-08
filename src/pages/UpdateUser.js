import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UpdateUser from "../components/User/UpdateUser";

const UpdateUserPage = () => {
  const users = useSelector((state) => state.users.users);
  const { userId } = useParams();
  const user = users.find((item) => item.id === userId);

  const navigate = useNavigate();
  const cancelEditHandler = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <UpdateUser user={user} onCancelEdit={cancelEditHandler} />
    </React.Fragment>
  );
};

export default UpdateUserPage;
