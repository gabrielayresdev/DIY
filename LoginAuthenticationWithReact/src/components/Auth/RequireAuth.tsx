import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const RequireAuth = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!auth.user) navigate("/");
  }, [auth.user, navigate]);

  // Can also use children instead of Outlet
  return <>{<Outlet />}</>;
};

export default RequireAuth;
