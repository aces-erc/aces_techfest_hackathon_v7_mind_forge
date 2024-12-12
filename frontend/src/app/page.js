"use client";

import NavBar from "@/components/landing/NavBar";
import { Hero } from "@/components/landing/Hero";
import EmergencyFeatures from "@/components/landing/EmergencyFeatures";
import HowItWorks from "@/components/landing/HowitWork";
import Footer from "@/components/landing/Footer";
import KeyBenefits from "@/components/landing/KeyBenefit";

export default function Home() {
  return (
    <main>
      <NavBar
        display={"flex"}
        btnContent={"Get Started"}
        hrefLink={"/chooserole"}
      />
      <Hero />
      <EmergencyFeatures />
      <HowItWorks />
      <KeyBenefits />
      <Footer />
    </main>
  );
}
