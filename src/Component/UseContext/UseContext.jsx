import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-toastify";

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const fakeUsers = [
    { username: "user1", password: "1000" },
    { username: "user2", password: "100" },
    { username: "user3", password: "2000" }
  ];

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ NEW

  useEffect(() => {
    const savedUsername = window.localStorage.getItem("username");
    if (savedUsername) {
      setUser({ username: savedUsername });
    }
    setLoading(false); // ✅ Done loading
  }, []);

  const login = (username, password) => {
    const userfound = fakeUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (userfound) {
      const userData = { username: userfound.username };
      setUser(userData);
      window.localStorage.setItem("username", userData.username);
      toast.success("Logged in Successfully");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("username");
    toast.success("Logged out Successfully");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
