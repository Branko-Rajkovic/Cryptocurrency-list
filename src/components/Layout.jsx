import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function Layout() {
  return (
    <div className="w-auto min-h-screen bg-slate-700">
      <motion.div
        className="bg-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
      </motion.div>
    </div>
  );
}
