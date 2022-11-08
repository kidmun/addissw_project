import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import Layout from "./components/Layout/Layout";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";
import MobileNavigation from "./components/Navigation/MobileNavigation/MobileNavigation";
import Toolbar from "./components/Toolbar/Toolbar";
import HomePage from "./pages/Home";
import AddUserPage from "./pages/AddUser";
import DeleteUserPage from "./pages/DeleteUser";
import UpdateUserPage from "./pages/UpdateUser";
import Notification from "./components/Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/userSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(userActions.getUsers());
  }, [dispatch]);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const mobileNavHandler = (isOpen) => {
    setShowBackdrop(isOpen);
    setShowMobileNav(isOpen);
  };
  const backdropClickHandler = () => {
    setShowBackdrop(false);
    setShowMobileNav(false);
  };

  return (
    <React.Fragment>
      {showBackdrop && <Backdrop onClick={backdropClickHandler} />}
      <Layout
        header={
          <Toolbar>
            <MainNavigation
              onOpenMobileNav={mobileNavHandler.bind(this, true)}
            />
          </Toolbar>
        }
        mobileNav={
          <MobileNavigation
            open={showMobileNav}
            mobile
            onChooseItem={mobileNavHandler.bind(this, false)}
          />
        }
      />
      {notification.status.length > 0 && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/delete-user/:userId" element={<DeleteUserPage />} />
        <Route path="/update-user/:userId" element={<UpdateUserPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
