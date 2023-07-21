import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthProvider";
import ROUTES from "helpers/utils/routes";

const Register = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate(ROUTES.home);
  });

  return <div>Register</div>;
};

export default Register;
