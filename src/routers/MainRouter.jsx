import React from "react";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../layouts/GeneralLayout";
import HooksRouter from "./HooksRouter";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route path="hooks/*" element={<HooksRouter />} />
        <Route path="*" element={<div>Error page</div>} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
