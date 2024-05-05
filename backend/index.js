const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const model = require("./models/auth");
require('dotenv').config();


const app = express();
const port = 5173;
app.use(cors());
app.use(bodyParser.json());



app.post('/order', async (req, res) => {
  // setting up options for razorpay order.
  const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
  });
  
  const options = {
      amount: 500,
      currency: "INR",
      receipt: "RECEIPT",
      payment_capture: 1
  };
  try {
      const response = await instance.orders.create(options)
      res.json({
          order_id: response.id,
          currency: response.currency,
          amount: response.amount,
      })
  } catch (err) {
     res.status(400).send('Not able to create order. Please try again!');
  }
});

app.post("/success", async (req, res) => {
  const {orderCreationId,email, cartdata } = req.body;
  console.log(email);
  try {
    // Find the user by email
    const user = await model.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new order object
    const newOrder = {
      cart: cartdata,
    };

    // Add the new order to the user's orders array
    user.orders.push(newOrder);

    // Save the updated user object
    await user.save();

    return res.status(200).json({ message: "Order added successfully" });
  } catch (error) {
    console.error("Error adding order:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


// verification part left visit: https://dev.to/soumyadey/integrate-razorpay-in-your-react-app-2nib
 
app.get('/getData', async (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
    params: {
      // query: 'Crop Tops',
      page: '1',
      country: 'US',
      category_id: 'aps'
    },
    headers: {
      'X-RapidAPI-Key': 'fe4b00a67bmsh584fd976b0e4f30p138380jsn992e08f27a7b',
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  try {
    const query = req.query.query; // Extracting the search query from the request
    if (!query) {
      return res.status(400).send('Search query is required');
    }

    options.params.query = query; // Updating options with the search query

    const response = await axios.request(options);
    const products = response.data.data.products.map(x => ({
      id:x.asin,
      title: x.product_title,
      photo: x.product_photo,
      price: x.product_price
    }));
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getProduct', async (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/product-details',
    params: {
      // asin: 'B0CL6ZRN1L',
      country: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'fe4b00a67bmsh584fd976b0e4f30p138380jsn992e08f27a7b',
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  try {
    // Assuming dynamicAsin is extracted from the request
    const dynamicAsin = req.query.asin; // Assuming 'asin' is a query parameter
  
    if (!dynamicAsin) {
      throw new Error('Id is required'); // Handle case when asin is not provided
    }
  
    options.params.asin = dynamicAsin; // Set the 'asin' parameter dynamically
  
    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});


app.get('/getUserData', async (req, res) => {
  const { userEmail } = req.query; // Extract email from query parameters
  try {
    // Check if the user exists in the database
    const user = await model.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // If user exists, send the user data
    res.status(200).json({ userData: user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/loginCheck', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists in the database
    const user = await model.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Check if the password is correct
    const isPasswordValid = (user.password===password)?true:false;
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.status(200).json({ msg: 'Login successful', email });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }  
});

app.post('/register', async (req, res) => {
  const { name, email, contact, password, confirmPassword } = req.body;
  try {
    // Check if the user already exists in the database
    const existingUser = await model.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }
    // Create a new user record
    const newUser = new model({ name, email, contact, password });
    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully', email });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }  
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// to fetch 

// fetch('http://localhost:5173/getData')
// .then(response => response.json())
// .then(data => {
//   console.log(data); // Array of product titles
//   // You can further process the data here
// })
// .catch(error => console.error('Error:', error));
