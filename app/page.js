'use client'
import Navbar from "@/Components/Navbar/Navbar.js";
import styles from "./page.module.css";
import MainDiv from "@/Components/Cards1/MainDiv";
import {AuthProvider } from "@/store/AuthContext";
export default function Home() {
  
  return (
    <AuthProvider>
      <Navbar />
      <MainDiv/>
      <div className={styles.test}></div>
    </AuthProvider>
  );
}
