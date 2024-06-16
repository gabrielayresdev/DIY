import React from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
};
type LoginProps = {
  email: string;
  password: string;
};
type AuthContextValue = {
  user: User | null;
  token: string | null;
  loginAction: (data: LoginProps) => void;
  logOut: () => void;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState(
    localStorage.getItem("token") || null
  );
  const navigate = useNavigate();

  const loginAction = async (data: LoginProps) => {
    try {
      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (res.token && res.user) {
        setUser(res.user);
        setToken(res.token);
        localStorage.setItem("token", res.token);
        navigate("/dashboard");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const getData = React.useCallback(async () => {
    if (!user && token) {
      try {
        const response = await fetch("http://localhost:3333/getData", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await response.json();
        console.log(res);
        if (res.user) {
          setUser(res.user);
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [navigate, token, user]);

  React.useEffect(() => {
    getData();
  }, [token, getData]);

  const logOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("AuthContext must be used inside provider");
  return context;
};
