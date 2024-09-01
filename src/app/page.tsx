"use client";
import Hero from "@components/Hero";
import JoinHackers from "@components/JoinHackers";
import Talk from "@components/Talk";
import Trailer from "@components/Trailer";
import Departments from "@components/Departments";
import { Background } from "@/app/genericComponents/General";

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
    </main>
  );
}
