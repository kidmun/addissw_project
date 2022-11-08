import React, { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import { required, length } from "../../util/validators";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

const User_FORM = {
    firstName: {
      value: "",
      valid: false,
      touched: false,
      validators: [required, length({ min: 2 })],
    },
    lastName: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, length({ min: 2 })],
      },
    age: {
      value: "",
      valid: false,
      touched: false,
      validators: [required],
    },
    gender: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, length({ max: 1 })],
      },
    height: {
      value: "",
      valid: false,
      touched: false,
      validators: [required],
    },
  };
const AddUser = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [userForm, setUserForm] = useState(User_FORM);
    const [formIsValid, setFormIsValid] = useState(false);
    const users = useSelector(state => state.users.users);
    
  const postInputChangeHandler = (input, value) => {
  
    setUserForm((prevState) => {
      let isValid = true;
      for (const validator of prevState[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState,
        [input]: {
          ...prevState[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      setFormIsValid(formIsValid);

      return updatedForm;
    });
  };
  const cancelPostChangeHandler = () => {
    setUserForm(User_FORM);
    setFormIsValid(false);
    props.onCancelEdit();
  };
  const inputBlurHandler = (input) => {
    setUserForm((prevState) => {
      return {
        ...prevState,
        [input]: {
          ...prevState[input],
          touched: true,
        },
      };
    });
  };
  const acceptPostChangeHandler = () => {
    

    const user = {
      id: Math.random().toString(),
      firstName: userForm.firstName.value,
      lastName: userForm.lastName.value,
      age: userForm.age.value,
      gender: userForm.gender.value.toUpperCase(),
      height: userForm.height.value
    }
    const newUsers = [...users, user]
    
    
    dispatch(userActions.addUserRequest({
      users: newUsers,
      user: user
    }));
    navigate('/');
    
  }
  return (
    <React.Fragment>
      <Backdrop onClick={cancelPostChangeHandler} />
      <Modal
        title="Add User"
        acceptEnabled={formIsValid}
        onCancelModal={cancelPostChangeHandler}
        onAcceptModal={acceptPostChangeHandler}
        isLoading={false}
      >
        <form>
                
            <Input
            id="firstName"
            label="First Name"
            control="input"
            onChange={postInputChangeHandler}
            onBlur={inputBlurHandler.bind(this, "firstName")}
            valid={userForm["firstName"].valid}
            touched={userForm["firstName"].touched}
            value={userForm["firstName"].value}
          />    
            <Input
            id="lastName"
            label="Last Name"
            control="input"
            onChange={postInputChangeHandler}
            onBlur={inputBlurHandler.bind(this, "lastName")}
            valid={userForm["lastName"].valid}
            touched={userForm["lastName"].touched}
            value={userForm["lastName"].value}
          />    
           <Input
            id="age"
            type="number"
            label="Age"
            control="input"
            onChange={postInputChangeHandler}
            onBlur={inputBlurHandler.bind(this, "age")}
            valid={userForm["age"].valid}
            touched={userForm["age"].touched}
            value={userForm["age"].value}
          />    
         
         <Input
            id="gender"
            label="Gender('m' or 'f')"
            control="input"
            onChange={postInputChangeHandler}
            onBlur={inputBlurHandler.bind(this, "gender")}
            valid={userForm["gender"].valid}
            touched={userForm["gender"].touched}
            value={userForm["gender"].value}
          />    
         
         <Input
            id="height"
            type="number"
            label="Height(cm)"
            control="input"
            onChange={postInputChangeHandler}
            onBlur={inputBlurHandler.bind(this, "height")}
            valid={userForm["height"].valid}
            touched={userForm["height"].touched}
            value={userForm["height"].value}
          />    
         
         
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default AddUser;
