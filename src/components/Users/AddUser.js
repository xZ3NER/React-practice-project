import React, { useState } from "react";

import Button from "../UI/Button";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onUsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        return;
    }
    if (+enteredAge < 1) {
        return;
    }

    props.onUserAdded({
      name: enteredUsername,
      age: +enteredAge,
      id: Math.random().toString()
    });

    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username-input'>Username</label>
        <input
          type='text'
          id='username-input'
          onChange={onUsernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor='age-input'>Age (Years)</label>
        <input
          type='number'
          id='age-input'
          onChange={onAgeChangeHandler}
          value={enteredAge}
        />
        <Button type='submit' onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
