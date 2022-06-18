import React from "react";

import Headers from "../parts/Headers";
import AsideMenu from "../parts/AsideMenu";
import Footer from "../parts/Footer";

import Breadcrumbs from "../components/Breadcrumbs";

import DetailCheckout from "../parts/Cart/DetailCheckout";
import DetailShipping from "../parts/Cart/DetailShipping";

export default function Cart() {
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
            url: "/checkout",
            name: "Cart",
          },
        ]}
      />
      
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <DetailCheckout />
            <DetailShipping />
          </div>
        </div>
      </section>

      <AsideMenu />
      <Footer />
    </>
  );
}
