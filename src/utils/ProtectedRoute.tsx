import { Navigate, useLocation } from "react-router";

const ProtectedRoute: any = ({ children = {} }) => {
  const currentUser = window.api.getCurrentUser();
  let location = useLocation();

  if (!currentUser && currentUser.Role !== "Admin") {
    // Reidrector to login if no
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
