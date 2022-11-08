import React from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import "./Notification.css";
import { uiActions } from "../../store/uiSlice";

const Notification = (props) => {
  const dispatch = useDispatch();
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = "error";
  }
  if (props.status === "success") {
    specialClasses = "success";
  }

  const cssClasses = `notification ${specialClasses}`;
  const cancelHandler = () => {
    dispatch(uiActions.turnOffNotification());
  };

  return (
    <React.Fragment>
      <section className={cssClasses}>
        <h2>{props.title}</h2>

        <p>{props.message}</p>
        <Button mode="accent" onClick={cancelHandler}>X</Button>
      </section>
      <br />
    </React.Fragment>
  );
};

export default Notification;
