'use client'
import "./LoginPage.css"
import { useAuth } from "@/store/AuthContext";
import Link from "next/link";
export default function LoginPage() {
   const {isLoggedIn,login} =useAuth();
   function handleLogin(){
      login();
   }
  return (
    <>
     <div className="sidenav">
         <div className="login-main-text">
            <h1>Login Page</h1>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                 <Link href="/"> <button type="button" className="btn btn-black" onClick={handleLogin}>Login</button></Link>
                  <button type="button" className="btn btn-secondary register">Register</button>
               </form>
            </div>
         </div>
      </div>
    </>
  )
}
