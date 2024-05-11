import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (adminData) => {
    setUser(adminData);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminData");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
