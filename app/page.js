import Navbar from "@/Components/Navbar/Navbar.js";
import styles from "./page.module.css";
import MainDiv from "@/Components/Cards1/MainDiv";
import Swiper from "@/Components/Swiper/Carasoul.js";
export default function Home() {
  return (
    <>
      <Navbar />
      <MainDiv/>
      <Swiper />
      <div className={styles.test}></div>
    </>
  );
}
