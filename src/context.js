import React, { useState, useEffect, useContext, Children } from "react";

const UserContext = React.createContext();
export function useUserContext() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchAsync() {
      let response = await fetch(
        "https://secure.equinoxmarkets.com/api/spread-group-symbols-price/RUBY-Premium"
      );
      let data = await response.json();
      return data;
    }

    fetchAsync()
      .then((data) => setList(data))
      .catch((reason) => console.log(reason.message));
  }, []);

  useEffect(() => {
    async function fetchAsync() {
      let response = await fetch("https://reqres.in/api/users/2");
      let data = await response.json();
      return data;
    }

    fetchAsync()
      .then((data) => setUser(data))
      .catch((reason) => console.log(reason.message));
  }, []);

  let a = 123;
  const value = { user, list };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
