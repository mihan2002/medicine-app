import  { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  // Define your global variables here
  const [globalVariable, setGlobalVariable] = useState(false);

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};
