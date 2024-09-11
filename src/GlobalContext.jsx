import { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  // Define your global variables here
  const [globalVariable, setGlobalVariable] = useState(false);
  const [isLogInPage, setIsLogInPage] = useState(true); // New global variable

  return (
    <GlobalContext.Provider 
      value={{ 
        globalVariable, 
        setGlobalVariable, 
        isLogInPage, 
        setIsLogInPage 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
