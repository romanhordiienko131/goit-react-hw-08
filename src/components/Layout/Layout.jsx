import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <AppBar></AppBar>
      <Toaster />
      <Suspense fallback={null}>
        <div className={s.content}>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
