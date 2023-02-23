import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const userAddedHandler = (user) => {
    setUsers( (prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <React.Fragment>
      <AddUser onUserAdded={userAddedHandler}/>
      <UsersList users={users} />
    </React.Fragment>
  );
}

export default App;
