'use client'
import "./LoginPage.css"

export default function LoginPage() {
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
                  <button type="button" className="btn btn-black">Login</button>
                  <button type="button" className="btn btn-secondary register">Register</button>
               </form>
            </div>
         </div>
      </div>
    </>
  )
}
