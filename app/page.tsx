"use client"

import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactForm from "./Components/ContactForm";

    export default function Home() {
      useEffect (() => {
        AOS.init({
          easing: "ease-out-back",
          duration: 1200,
          mirror: true,
          anchorPlacement: "bottom-bottom",
          offset: 160,
        });
        AOS.refresh()
      }, []);
      return (
        <main>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <ContactForm />
          <Footer />
        </main>
    
    
   );
    }
