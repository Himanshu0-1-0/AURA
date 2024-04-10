import Navbar from "@/Components/Navbar/Navbar.js";
import styles from "./page.module.css";
import MainDiv from "@/Components/Cards1/MainDiv";
export default function Home() {
  return (
    <>
      <Navbar />
      <MainDiv/>
      <div className={styles.test}></div>
    </>
  );
}
