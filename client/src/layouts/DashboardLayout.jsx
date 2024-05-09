import React, { useState } from "react";
import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  useTitle("RecipiHub-Pro - Dashboard");

  return (
    <section className="flex">
      <Sidebar
        setIsCollapsed={setIsCollapsed}
        isCollapsed={isCollapsed}
      />
      <div className="basis-5/6 mx-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
