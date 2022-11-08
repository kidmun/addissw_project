import React from "react";
import { useParams } from "react-router-dom";
import DeleteUser from "../components/User/DeleteUser";

const DeleteUserPage = () => {
  const { userId } = useParams();

  return (
    <React.Fragment>
      <DeleteUser id={userId} />
    </React.Fragment>
  );
};
export default DeleteUserPage;
