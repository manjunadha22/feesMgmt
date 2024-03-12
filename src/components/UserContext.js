import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [student, setStudent] = useState("");
  // const [admin,setAdmin]=useState("");

  return (
    <UserContext.Provider value={{ student, setStudent }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
