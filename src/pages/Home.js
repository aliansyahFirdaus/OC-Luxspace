import React from "react";
import Headers from "../parts/Headers";
import Hero from "../parts/Hero";
import StartBrowse from "../parts/HomePage/StartBrowse";
import JustArrived from "../parts/HomePage/JustArrived";

export default function Home() {
  return (
    <>
      <Headers />
      <Hero />
      <StartBrowse />
      <JustArrived />
    </>
  );
}
