import LoginPage from "@/Components/loginPage/LoginPage";
import {AuthProvider } from "@/store/AuthContext";
export default function Home() {
    return (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );
  }