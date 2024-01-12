import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get(`/auth/profile/:id`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = async (data) => {
    setLoading(true);
    try {
      const response = await axiosClient.post("/auth/login", data);
      setUser(response.data);
      navigate("/");
    } catch (error) {
      console.log("Login Failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      axiosClient.post("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log("Logout Failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
