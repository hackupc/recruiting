"use client";
import Hero from "@components/Hero";
import Departments from "@components/Departments";
import {
  Background,
  TransparentBackground,
} from "@/app/genericComponents/General";
import Hackers from "@components/Hackers";
import Socials from "@components/Socials";
import Footer from "@components/Footer";
import PresentationCards, { VideoCards } from "@components/PresentationCards";
import styled from "styled-components";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";

const FirstBackground = styled(TransparentBackground)`
  min-width: 0;
  padding: ${SpacingS} ${SpacingM} 0;

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingM} ${SpacingS} 0;
  }
`;

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FirstBackground>
        <PresentationCards />
      </FirstBackground>
      <Background>
        <Departments />
      </Background>
      <TransparentBackground>
        <VideoCards />
      </TransparentBackground>
      <TransparentBackground>
        <Hackers />
      </TransparentBackground>
      <Background>
        <Socials />
      </Background>
      <Footer />
    </main>
  );
}
