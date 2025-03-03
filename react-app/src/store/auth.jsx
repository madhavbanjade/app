import { createContext, useContext } from "react";
import { TbArrowUpRightCircle } from "react-icons/tb";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //by doing this any component of the react pages they can use it
  const storeTokenInLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={{ storeTokenInLs }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  //it likes doremon which have any gadgets to work with
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
