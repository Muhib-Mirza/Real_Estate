import React from "react";

import Carousel from "@/Component/Homepage/Carousel";
import Searchbar from "@/Component/Homepage/SearchBar";
import Fotter from "@/Component/Homepage/Fotter";
import Navbar from "@/Component/Homepage/Navbar";
import About from "@/Component/Homepage/about";
import Section from "@/Component/Homepage/Section";
import Cards from "@/Component/Homepage/Cards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Searchbar />
      <Section />
      <Cards />
      <About />
      <Fotter />
    </>
  );
}
