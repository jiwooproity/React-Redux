import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Test from "./components/Test";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route pathname={"/test"} element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
