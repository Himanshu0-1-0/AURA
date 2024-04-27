'use client'
import React, { useEffect, useState } from 'react';
import ProductPageSt from "./ProductPageStruc";

export default function ProductPage({ id }) {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5173/getProduct?asin=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      {productData ? (
        <ProductPageSt productData={productData.data} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
