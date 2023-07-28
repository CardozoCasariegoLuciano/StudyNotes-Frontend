import { Navigate, Outlet } from 'react-router-dom';
import { Roles } from '../../helpers/roles.enum';
import useUser from '../../hooks/useUser';
import HeaderAndFooter from '../../layouts/HeaderAndFooter';

type AdminRoutesPropType = {
  redirectPath?: string;
};

const AdminRoutes = ({ redirectPath = '/' }: AdminRoutesPropType) => {
  const { isLoggued, user } = useUser();

  const validRole =
    user?.role === Roles.ADMIN || user?.role === Roles.SUPER_ADMIN;

  if (!isLoggued || !validRole) {
    return <Navigate to={redirectPath} />;
  }

  return (
    <HeaderAndFooter>
      <Outlet />
    </HeaderAndFooter>
  );
};

export default AdminRoutes;
