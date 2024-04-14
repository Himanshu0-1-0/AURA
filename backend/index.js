const express = require('express');
const axios = require('axios');

const app = express();
const port = 5173;

const options = {
  method: 'GET',
  url: 'https://real-time-amazon-data.p.rapidapi.com/search',
  params: {
    query: 'Clothes',
    page: '1',
    country: 'US',
    category_id: 'aps'
  },
  headers: {
    'X-RapidAPI-Key': '7c98d7aac5msh7e8a523c3798c64p122de4jsn43cccee2eef2',
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

app.get('/getData', async (req, res) => {
  try {
    const response = await axios.request(options);
    const products = response.data.data.products.map(x => x.product_title);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
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