"use client"
import Image from "next/image";
import HomeSlider from "./components/HomeSlider/HomeSlider";
import MovieCarousel from "./components/MovirCarousel/MovieCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeSlider/>
      <MovieCarousel/>

    </main>
  );
}
