'use client'
import LoginPage from "@/Components/loginPage/LoginPage";
import RegisterPage from "@/Components/loginPage/RegisterPage"
import { useSearchParams } from 'next/navigation'
import {AuthProvider } from "@/store/AuthContext";
export default function Home() {
  const searchParams = useSearchParams();
  const state = searchParams.get('state');
    return (
      <AuthProvider>
        {(state==='login')? <LoginPage />:<RegisterPage/>}
      </AuthProvider>
    );
  }   