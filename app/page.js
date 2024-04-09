import Navbar from "@/Components/Navbar/Navbar.js";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.test}>Hello</div>
    </>
  );
}
