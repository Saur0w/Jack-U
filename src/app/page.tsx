"use client";

import Landing from "../components/Landing/index";
import About from "../components/about/index";
import Skrillex from "../components/Skrillex/index";
import Diplo from "../components/Diplo/index";

export default function Home() {
  return (
    <div>
        <Landing />
        <About />
        <Skrillex />
        <Diplo />
    </div>
  );
}
