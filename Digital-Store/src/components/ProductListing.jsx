import axios from "axios";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

export const ProductListing = () => {
    const [data, setData] = useState([])
  const apiURL = "https://fakestoreapi.com/products";
  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      setData(response.data)
    } catch (error) {
        console.log("Erro ao ao buscar os produtos");
        
    }
  };

  useEffect(() => {
    fetchProducts()
  }, [])
  return <div className="flex flex-wrap gap-4">
    {data.map((product, index) => (
        <ProductCard key={index} 
        category={product.category}
        name={product.title}
        img={product.image}
        price={product.price}
        priceDiscount={product.price}
        id={product.id}
        />
    ))}
  </div>;
};
