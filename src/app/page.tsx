"use client";

import Landing from "../components/Landing/index";
import About from "../components/about/index";
import Who from "../components/who/index";
import Skrillex from "../components/Skrillex/index";
import Diplo from "../components/Diplo/index";

export default function Home() {
  return (
    <div>
        <Landing />
        <About />
        <Who />
        <Skrillex />
        <Diplo />
    </div>
  );
}
