import React from "react";
import styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/Slice/StateSlice";
const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandle = (e) => {
    e.preventDefault();

    dispatch(logout());
  }
  return (
    <>
      <header className={styles.navbar_container}>
        <h2>Redux Auth</h2>

        {isAuth && (
          <ul>
            <li>
              <a href="#">My Products</a>
            </li>
            <li>
              <a href="#">My Sales</a>
            </li>
            <li className={styles.btn}>
              <a href="#" onClick={logoutHandle}>Logout</a>
            </li>
          </ul>
        )}

      </header>
    </>
  );
};

export default Navbar;
