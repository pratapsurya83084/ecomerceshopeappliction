// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";
// import { useLocation,Navigate } from "react-router-dom";
// //issues creates in this componnt
// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return <div>Loading....</div>;
//   }
//   if (user) {
//     return children;
//   }
//   return (
//     <div>
//       <Navigate to="/login" state={{ from: location }} replace></Navigate>
//     </div>
//   );
// };

// export default PrivateRoute;
// PrivateRoute.js
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
