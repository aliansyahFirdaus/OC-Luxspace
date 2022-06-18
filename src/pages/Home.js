import React from "react";

import Hero from "../parts/HomePage/Hero";
import Headers from "../parts/Headers";
import AsideMenu from "../parts/AsideMenu";
import Footer from "../parts/Footer";

import StartBrowse from "../parts/HomePage/StartBrowse";
import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/HomePage/Clients";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";

export default function Home() {
  useScrollAnchor()
  return (
    <>
      <Headers position="absolute" />
      <Hero />
      <StartBrowse />
      <JustArrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}
