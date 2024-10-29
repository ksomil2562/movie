import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import { MdMovie } from "react-icons/md";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/navbar";
import HomeSlider from "@/components/homeSlider/homeSlider";
import MovieCarousel from "@/components/movieCarousel/movieCarousel";
export default function Home() {
  return (
    <>
      <div>
        <main className={styles.main}>
          <HomeSlider/>
          <MovieCarousel/>
        </main>
        <footer className={styles.footer}>
        </footer>
      </div>
    </>
  );
}
