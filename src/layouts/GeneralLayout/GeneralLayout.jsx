import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";

const GeneralLayout = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="section">
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralLayout;
