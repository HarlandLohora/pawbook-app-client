import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import ProductsPage from "../pages/ProductsPage";
import Usuario from "../pages/Usuario";
import Nueva from "../pages/Nueva";
import TodasLasMascotas from "../pages/TodasLasMascotas";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: "/",
      element: <HomePage {...props} />,
    },
    {
      path: '/products',
      element: <ProductsPage {...props} />
    },
    {
      path: "/auth/signup",
      element: <Signup {...props} />,
    },
    {
      path: "/miotraruta",
      element: <Signup {...props} />,
    },
    {
      path: "/auth/login",
      element: <Login {...props} />,
    },
    {
      path: "/protected",
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: "/user",
      element: <Usuario {...props} />
    },
    {
      path: "/nueva",
      element: <Nueva {...props} />
    },
    {
      path: "/all-mascotas",
      element: <TodasLasMascotas  {...props} />
    }
  ];
};

export default routes;
