import React from "react";
import styles from "../Users/Users.module.css";
import Card from "../Ui/Card";

const AddUsers = (props) => {




  const AddUserHandler = (e) => {

    e.preventDefault();
  };

  return (
    
      
       <div className={styles.container}>
         <form onSubmit={AddUserHandler} className= {styles.form}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="username" />

          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" placeholder="age"/>

          <button type="submit">Add User</button>
        </form>
      
       </div>
    
  );
};

export default AddUsers;
