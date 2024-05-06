'use client'
import { useEffect, useState } from 'react';

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
      fetch(`http://localhost:5173/getUserData?userEmail=${userEmail}`)
        .then(response => response.json())
        .then(data => {
          setUserData(data.userData);
        })
        .catch(error => console.error('Error:', error));
    }
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Contact: {userData.contact}</p>
          <h3>Orders:</h3>
          <ul>
            {userData.orders.map(order => (
              <li key={order._id}>
                <h4>Order ID: {order._id}</h4>
                <ul>
                  {order.cart.map(item => (
                    <li key={item._id}>
                      <img src={item.image} alt={item.name} />
                      <p>Name: {item.name}</p>
                      <p>Price: {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
