"use client";
import Hero from "@components/Hero";
import JoinHackers from "@components/JoinHackers";
import Talk from "@components/Talk";
import Trailer from "@components/Trailer";
import Departments from "@components/Departments";
import {
  Background,
  TransparentBackground,
} from "@/app/genericComponents/General";
import Hackers from "@components/Hackers";
import Socials from "@components/Socials";
import Footer from "@components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <JoinHackers />
      <Talk />
      <Trailer />
      <Background>
        <Departments />
      </Background>
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
