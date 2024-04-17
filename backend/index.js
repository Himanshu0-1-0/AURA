const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5173;
app.use(cors());
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
    'X-RapidAPI-Key': '2f76fd13a7msh80786801691a844p1e39edjsn3a0dd421bdb0',
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

app.get('/getData', async (req, res) => {
  // try {
  //   const response = await axios.request(options);
  //   const products = response.data.data.products.map(x => ({
  //     title: x.product_title,
  //     photo: x.product_photo,
  //     price: x.product_price
  //   }));
  //   res.json(products);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send('Internal Server Error');
  // }
  try {
    const query = req.query.query; // Extracting the search query from the request
    if (!query) {
      return res.status(400).send('Search query is required');
    }

    options.params.query = query; // Updating options with the search query

    const response = await axios.request(options);
    const products = response.data.data.products.map(x => ({
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
