import { Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!loading && !user && !showToast) {
      toast.error("You must be logged in to view this page");
      setShowToast(true); // Prevent multiple toasts
    }
  }, [loading, user, showToast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
