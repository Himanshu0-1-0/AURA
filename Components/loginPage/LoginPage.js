'use client'
import "./LoginPage.css"
import Error from "./Error";
import { useAuth } from "@/store/AuthContext";
import { useRef ,useState,useEffect} from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function LoginPage() {
   const {login} =useAuth();

   // error
   const [error, setError] = useState({vis:false,msg:""});
  
   const emailRef = useRef();
   const passwordRef = useRef();
   const router = useRouter();

   async function handleLogin(e){
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      try {
         const response = await fetch('http://localhost:5173/loginCheck', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ email, password }),
         });
         const data = await response.json();
         if (response.ok) {
            const { email } = data; 
            login(email); 
            // console.log(email)
           router.push("/");
         } else {
           // Handle authentication error
         //   console.error('Authentication failed:', data.error);
           const Er= {vis:true,msg:data.error};
           setError(Er);
           setTimeout(()=>{
            setError({vis:false,msg:""})
           },3000)
         }
       } catch (error) {
         console.error('Error:', error);
       }
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
               <form onSubmit={handleLogin}>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="email" className="form-control" placeholder="Mail"  ref={emailRef}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"  ref={passwordRef}/> 
                  </div>
                 {/* <Link href="/"></Link> */} 
                 <button type="submit" className="btn btn-black" >Login</button>
                  <Link href="/login?state=register"><button type="button" className="btn btn-secondary register">Register</button></Link>
               </form>
               {error.vis?<Error msg={error.msg}/>:undefined}
            </div>
         </div>
      </div>
    </>
  )
}
