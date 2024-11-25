import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout, { SimpleLayout } from "../components/Layout";
import { CreateAccountPage } from "../Pages/CreateAccountPage";
import NotFoundPage from "../Pages/NotFoundPage";
import { Teste } from "../Pages/Teste";
import { ProductListing } from "../components/ProductListing";

export const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Login and Register */}
        <Route element={<SimpleLayout />}>
          <Route path="/register" element={<CreateAccountPage />} />
        </Route>
        {/* Pages WebApp */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListing />} />
          <Route path="/register" element={<CreateAccountPage />} />
        </Route>
        {/* Rota para qualquer URL inexistente seja redirecionada para a Home */}
        <Route path="*" element={<NotFoundPage />} />
        
        {/* Rota de testes */}
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
};
