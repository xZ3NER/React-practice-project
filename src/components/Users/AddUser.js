import React, { useState } from "react";

import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const onUsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(undefined);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onUserAdded({
      name: enteredUsername,
      age: +enteredAge,
      id: Math.random().toString(),
    });

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
