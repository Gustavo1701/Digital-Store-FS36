import { Route, BrowserRouter as  Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout, { SimpleLayout } from "../components/Layout";
import { CreateAccountPage } from "../Pages/CreateAccountPage";
import NotFoundPage from "../Pages/NotFoundPage";
import { Teste } from "../Pages/Teste";
import ProductListingPage from "../Pages/ProductListingPage";
import { ProductDetails } from "../components/ProductDetails";
import LoginForm from "../Pages/LoginPage";
import { ProfileUser } from "../Pages/ProfileUser";
import MyOrders from "../Pages/MyOrders";

export const PrivateRoutes = () => {
  return (
        <Routes>
          {/* Login and Register */}
          <Route element={<SimpleLayout />}>
            <Route path="/register" element={<CreateAccountPage />} />
            <Route path="/login" element={<LoginForm />} />
          </Route>
          {/* Pages WebApp */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfileUser />} />
            <Route path="/produtos" element={<ProductListingPage />} />
            <Route path="/meuspedidos" element={<MyOrders />} />
            <Route path="/produto/:id" element={<ProductDetails />} />
            <Route path="/register" element={<CreateAccountPage />} />
          </Route>

          {/* Rota para qualquer URL inexistente seja redirecionada para a Home */}
          <Route path="*" element={<NotFoundPage />} />

          {/* Rota de testes */}
          <Route path="/teste" element={<Teste />} />
        </Routes>
  );
};





