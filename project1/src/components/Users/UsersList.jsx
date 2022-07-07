import React from "react";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <>
      <ul>
        {props.users.map((user) => {
          return (
            <>
              <div className={classes.item}>
                <li>
                  {user.name} ({user.age} years old.)
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
