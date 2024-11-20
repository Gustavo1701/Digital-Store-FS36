import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../components/Layout";

export const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          
          {/* Rota para qualquer URL inexistente seja redirecionada para a Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};
