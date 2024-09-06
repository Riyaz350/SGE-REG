import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return (
            <div className=" max-w-5xl mx-auto  min-h-screen  bg-white flex items-center justify-center">
                <span className=" loading loading-spinner loading-lg"></span>
            </div>
        )

    }

    if (user) {
        return children;
    }
    return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;