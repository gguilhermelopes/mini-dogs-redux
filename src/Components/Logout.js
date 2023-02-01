import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Logout.module.css";
import { userLogout } from "../store/login";

const Logout = () => {
  const { user, token } = useSelector((state) => state.login);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();
  return (
    <button
      aria-label="Logout"
      onClick={() => dispatch(userLogout())}
      className={`${styles.logout} ${loading ? styles.loading : ""} ${
        user.data ? styles.loaded : ""
      }`}
    ></button>
  );
};

export default Logout;
