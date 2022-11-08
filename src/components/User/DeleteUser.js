import React from "react";
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

const DeleteUser = (props) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cancelDeleteHandler = () => {
    navigate("/");
  };

  const acceptDeleteHandler = () => {
    console.log(props.id);

    const newUsers = users.filter((item) => item.id !== props.id);
    console.log(newUsers);
    dispatch(
      userActions.deleteUserRequest({
        users: newUsers,
        id: props.id,
      })
    );
    navigate("/");
  };

  return (
    <React.Fragment>
      <Backdrop onClick={cancelDeleteHandler} />
      <Modal
        title="Delete User"
        acceptEnabled={true}
        onCancelModal={cancelDeleteHandler}
        onAcceptModal={acceptDeleteHandler}
        isLoading={false}
      >
        <h1>Are you sure you want to delete this?</h1>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteUser;
