import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../../hooks/useUser';

type AuthRoutesPropType = {
  redirectPath?: string;
};

const AuthRoutes = ({ redirectPath = '/' }: AuthRoutesPropType) => {
  const { isLoggued } = useUser();

  if (isLoggued) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default AuthRoutes;
