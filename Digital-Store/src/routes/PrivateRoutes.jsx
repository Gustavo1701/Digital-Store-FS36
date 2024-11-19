import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../components/Layout";

export const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
