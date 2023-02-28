import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "utils/auth";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label htmlFor="user">
        User name:
        <input
          type="text"
          name="user"
          id="user"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
