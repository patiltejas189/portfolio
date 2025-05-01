import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
