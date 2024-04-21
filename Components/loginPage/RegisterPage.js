'use client'
import "./RegisterPage.css"
import Error from "./Error";
import { useAuth } from "@/store/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
export default function LoginPage() {
   const {isLoggedIn,login} =useAuth();

   const [error, setError] = useState({vis:false,msg:""});

   const router = useRouter();
   async function handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        contact: formData.get('contact'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
      };
    
      try {
        const response = await fetch('http://localhost:5173/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (response.ok) {
          // Registration successful, you can redirect or perform any other action here
          login();
          console.log(data.msg);
          router.push("/");

        } else {
          // Handle registration error
         //  console.error('Registration failed:', data.error);
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
            <h1>Register Here</h1>
            <p>Please Enter Your Credentials..</p>
           <Link href="/login?state=login"> <button type="button" className="btn btn-secondary register">Already Registered? Login..</button></Link>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={handleSubmit}>
                  <div className="form-group">
                     <label>Name</label>
                     <input type="text" className="form-control" placeholder="User Name" name="name"/>
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="email" className="form-control" placeholder="Mail" name="email"/>
                  </div>
                  <div className="form-group">
                     <label>Contact Number</label>
                     <input type="number" className="form-control" placeholder="Number" name="contact"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" name="password"/>
                  </div>
                  <div className="form-group">
                     <label>Confirm Password</label>
                     <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword"/>
                  </div>
                  <button type="submit" className="btn btn-black">Register Now</button>
               </form>
               {error.vis?<Error msg={error.msg}/>:undefined}
            </div>
         </div>
      </div>
    </>
  )
}
