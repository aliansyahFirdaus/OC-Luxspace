import React from "react";
import Headers from "../parts/Headers";
import AsideMenu from "../parts/AsideMenu";
import Footer from "../parts/Footer";

import Breadcrumbs from "../components/Breadcrumbs";

export default function Detail() {
  return (
    <>
      <Headers theme="black" />
      <Breadcrumbs
        items={[
          {
            url: "/",
            name: "Home",
          },
          {
            url: "/category/1",
            name: "Category",
          },
          {
            url: "/detail/3",
            name: "Detail",
          },
        ]}
      />
      <AsideMenu />
      <Footer />
    </>
  );
}
