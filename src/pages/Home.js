import React from "react";
import Headers from "../parts/Headers";
import Hero from "../parts/Hero";
import AsideMenu from "../parts/AsideMenu"
import Footer from "../parts/Footer"

import StartBrowse from "../parts/HomePage/StartBrowse";
import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/HomePage/Clients";

export default function Home() {
  return (
    <>
      <Headers />
      <Hero />
      <StartBrowse />
      <JustArrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}
