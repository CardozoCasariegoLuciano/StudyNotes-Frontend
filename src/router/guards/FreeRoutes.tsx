import { Outlet } from 'react-router-dom';
import HeaderAndFooter from '../../layouts/HeaderAndFooter';

type FreeRoutesPropType = {};

const FreeRoutes = ({}: FreeRoutesPropType) => {
  return (
    <HeaderAndFooter>
      <Outlet />
    </HeaderAndFooter>
  );
};

export default FreeRoutes;
