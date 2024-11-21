import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header, { SimpleHeader } from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

export const SimpleLayout = () => {
  return (
    <>
      <SimpleHeader />
      <Outlet />
      <Footer />
    </>
  );
};