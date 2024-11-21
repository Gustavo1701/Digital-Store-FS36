import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { SimpleLayout } from "../components/Layout";
import { CreateAccountPage } from "../Pages/CreateAccountPage";

export const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SimpleLayout />}>
          <Route path="/register" element={<CreateAccountPage />} />
          
          {/* Rota para qualquer URL inexistente seja redirecionada para a Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};
