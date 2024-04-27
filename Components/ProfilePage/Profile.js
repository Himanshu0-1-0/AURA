import  "./Profile.css";
export default function Profile() {
  return (
    <>
      <div className="profile-container">
    <div className="profile-header" > 
      <h1>User Profile</h1>
    </div>
    <div className="profile-details">
      <div className="profile-item">
        <span>Name:</span>
        <span>John Doe</span>
        <button>Edit</button>
      </div>
      <div className="profile-item">
        <span>Email:</span>
        <span>johndoe@example.com</span>
        <button>Edit</button>
      </div>
      <div className="profile-item">
        <span>Phone:</span>
        <span>+1234567890</span>
        <button>Edit</button>
      </div>
      <div className="profile-item">
        <span>Order History:</span>
        <a href="#">View Orders</a>
      </div>
    </div>
  </div> 
    </>
  )
}
