import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-slate-700">
      <div className="flex">
        <div className="w-1/6 h-auto">
          <Sidebar />
        </div>

        <div className="w-5/6">
          <Header />
          <main>
            <Outlet />
          </main>{" "}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
