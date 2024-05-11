import Routers from "./Routers";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { handleLogin } = useAuth();
  useEffect(() => {
    try {
      const adminData = localStorage.getItem("adminData");
      if (adminData) {
        handleLogin(JSON.parse(adminData));
      }
    } catch (err) {
      console.error("Error handling login:", err);
    }
  }, []);
  return <Routers />;
};

export default App;
