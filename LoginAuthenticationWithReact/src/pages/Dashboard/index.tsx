import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <div className="container">
      <div>
        <h1>Welcome! {auth.user?.name}</h1>
        <button onClick={() => auth.logOut()} className="btn-submit">
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
