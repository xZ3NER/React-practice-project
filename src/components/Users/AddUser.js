import React, { useState, useRef } from "react";

import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(undefined);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    const name = enteredName.current.value;
    const age = enteredAge.current.value;

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onUserAdded({
      name: name,
      age: +age,
      id: Math.random().toString(),
    });

    enteredName.current.value = "";
    enteredAge.current.value = "";
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
            ref={enteredName}
          />
          <label htmlFor='age-input'>Age (Years)</label>
          <input
            type='number'
            id='age-input'
            ref={enteredAge}
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
