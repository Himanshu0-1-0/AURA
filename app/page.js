import Navbar from "@/Components/Navbar/Navbar.js";
import styles from "./page.module.css";
import MainDiv from "@/Components/Cards1/MainDiv";
import Footer from "@/Components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <MainDiv/>
      <Footer/>
      <div className={styles.test}></div>
    </>
  );
}
