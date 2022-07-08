import React, { useState } from "react";
import styles from "../Users/Users.module.css";
import Card from "../Ui/Card";

const AddUsers = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");

  const AddUserHandler = (e) => {
    e.preventDefault();

    if(user.trim().length === 0 || age.trim().length === 0){
        return;
    }

    if(+age < 1){
        return;
    }

    // console.log(user, age);

    props.onAddUser(user, age);// calling onAddUserHandler function which is came from App.js through props
    // console.log(props.onAddUser(user, age));
    setUser(""); // reset the input field back to empty
    setAge("");

  };

  const usernameHandle = (e) => {
    e.preventDefault();

    setUser(e.target.value);
  };

  const ageHandle = (e) => {
    e.preventDefault();

    setAge(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={AddUserHandler} className={styles.form}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={user}
          id="username"
          placeholder="username"
          onChange={usernameHandle}
        />

        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          value={age}
          id="age"
          placeholder="age"
          onChange={ageHandle}
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUsers;
