import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { SimpleLayout } from "../components/Layout";
import { CreateAccountPage } from "../Pages/CreateAccountPage";
import LoginForm from "../Pages/LoginPage";

export const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SimpleLayout />}>
          <Route path="/register" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginForm />} />

          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Rota para qualquer URL inexistente seja redirecionada para a Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};
