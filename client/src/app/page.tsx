"use client";

import AboutUs from "@/components/aboutUs/aboutUs";
import AuthHandler from "@/components/auth/authHandler";
import FirstCell from "@/components/firstCell/firstCell";
import Footer from "@/components/footer/footer";
import HeaderComponent from "@/components/header/header";
import ThirdCell from "@/components/thirdCell/thirdCell";
import { useRef } from "react";

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  return (
    <>
      <AuthHandler />
      <HeaderComponent ref1={ref1} ref2={ref2} ref3={ref3} />

      <main>
        <FirstCell ref={ref3} />
        <AboutUs ref={ref2} />
        <ThirdCell ref={ref3} />
      </main>

      <Footer ref={ref1} />
    </>
  );
}
