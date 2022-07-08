import React from "react";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
    // console.log(props.id)
  return (
    <>
      <ul className={classes.container}>
        
        {props.users.map((user) => {

          const { name, age, id} = user;

          return (
            <>
              <div className={classes.item}>
                <li key={id}>
                  {name} ({age} years old.)
                </li>
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default UsersList;
