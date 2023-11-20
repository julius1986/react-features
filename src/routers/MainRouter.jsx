import React from "react";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../layouts/GeneralLayout";
import HooksRouter from "./HooksRouter";
import NotFoundPage from "../pages/NonFoundPage/NotFoundPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route path="hooks/*" element={<HooksRouter />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouter;
