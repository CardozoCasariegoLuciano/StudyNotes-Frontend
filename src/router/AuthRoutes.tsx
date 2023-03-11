import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/Auth/RegisterPage";

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default AuthRoutes;