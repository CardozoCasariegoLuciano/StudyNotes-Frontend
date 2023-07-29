import { Outlet } from 'react-router-dom';
import HeaderAndFooter from '../../layouts/HeaderAndFooter';

const FreeRoutes = () => {
  return (
    <HeaderAndFooter>
      <Outlet />
    </HeaderAndFooter>
  );
};

export default FreeRoutes;
