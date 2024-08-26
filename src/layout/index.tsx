import React from "react";
import { Outlet } from "react-router-dom";
import Header from "/@/layout/header";
import Footer from "/@/layout/footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
