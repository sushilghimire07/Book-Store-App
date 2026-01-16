import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(undefined);
      localStorage.removeItem("Users");
      toast.success("Logout successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1500); // Give toast time to show
    } catch (e) {
      toast.error("Error: " + e.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
