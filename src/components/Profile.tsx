import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "utils/auth";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div>Welcome {user}</div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Profile;
