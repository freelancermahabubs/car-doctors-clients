import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <progress
          className="progress progress-secondary w-56"
          value="0"
          max="100"
        ></progress>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
