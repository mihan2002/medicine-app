import  { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Define your global variables here
  const [globalVariable, setGlobalVariable] = useState(false);

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};
