import React from "react";

import Headers from "../parts/Headers";
import AsideMenu from "../parts/AsideMenu";
import Footer from "../parts/Footer";
import ErrorPage from "../parts/ErrorPage";

export default function NotFound() {
  return (
    <>
      <Headers theme="black" />
      <ErrorPage />
      <AsideMenu />
      <Footer />
    </>
  );
}
