import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header, { SimpleHeader } from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-5 min-h-screen ">
        <Outlet />
      </main>
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