import React from "react";
import { useSelector } from "react-redux";
import UserItem from "../components/User/UserItem";
import { css } from '@emotion/css'

const HomePage = () => {
  const color = 'white';
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.ui.loading);

  if (loading) {
    return (
      <div
      className={css`
        padding: 32px;
        margin-left: 200px;
        background-color: #24a392;
        width: 200px;
       font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
    Loading
    </div>
    );
  }
  return (
    <div>
      {users.length > 0 && <UserItem />}
      {!loading && users.length === 0 && (
        <h1 style={{ textAlign: "center" }}>No Users</h1>
      )}
    </div>
  );
};

export default HomePage;
