import { Outlet } from "react-router-dom";

type ErrorRoutesPropType = {};

const ErrorRoutes = ({}: ErrorRoutesPropType) => {
  return <Outlet />;
};

export default ErrorRoutes;
