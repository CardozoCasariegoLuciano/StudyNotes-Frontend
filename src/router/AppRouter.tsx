import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoutes>
              <AuthRoutes />
            </PublicRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
