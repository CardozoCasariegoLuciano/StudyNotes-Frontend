import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

//Guards
import AdminRoutes from './guards/AdminRoutes';
import AuthRoutes from './guards/AuthRoutes';
import ErrorRoutes from './guards/ErrorRoutes';
import FreeRoutes from './guards/FreeRoutes';
import UserRoutes from './guards/UserRoutes';

//Pages
const Home = lazy(() => import('../pages/Home/Home'));
const LoginPage = lazy(() => import('../pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Auth/RegisterPage'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>...cargando</div>}>
      <Routes>
        {/*Routes for logged users*/}
        <Route path="/" element={<UserRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/acount" element={<h1>Acount</h1>} />
        </Route>

        {/*Free routes*/}
        <Route path="/" element={<FreeRoutes />}>
          <Route path="/first" element={<h1>intro</h1>} />
        </Route>

        {/*Routes for admin users*/}
        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
        </Route>

        {/*Routes for auth pages*/}
        <Route path="/auth" element={<AuthRoutes />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="" element={<Navigate to="login" />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Route>

        {/*Error routes*/}
        <Route path="/error" element={<ErrorRoutes />}>
          <Route path="/error" element={<h1>Crear una pagina que tome el error de las querys</h1>} />
          <Route path="test4" element={<h1>Not found</h1>} />
          <Route path="test5" element={<h1>Internet cut</h1>} />
        </Route>
        <Route path="*" element={<h1>Error generico</h1>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
