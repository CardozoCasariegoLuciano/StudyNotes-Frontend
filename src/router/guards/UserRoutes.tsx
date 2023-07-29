import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import HeaderAndFooter from '../../layouts/HeaderAndFooter';

type UserRoutesPropType = {
  redirectPath?: string;
};

const UserRoutes = ({ redirectPath = '/auth' }: UserRoutesPropType) => {
  const { isLoggued } = useUser();

  if (!isLoggued) {
    return <Navigate to={redirectPath} />;
  }

  return (
    <HeaderAndFooter>
      <Outlet />
    </HeaderAndFooter>
  );
};

export default UserRoutes;
