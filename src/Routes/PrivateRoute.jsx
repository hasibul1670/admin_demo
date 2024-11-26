
import { Navigate, useLocation } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const email = localStorage.getItem("email");
  const location = useLocation();
  const pathname = location?.pathname || "/"; 

  if (!email) {
    return <Navigate to="/login" state={{ from: pathname }} />;
  }

  return <>{children}</>;
}
