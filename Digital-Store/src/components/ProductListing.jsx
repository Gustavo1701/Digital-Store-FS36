import axios from "axios";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { formatCurrency } from "../util/FormatToBRL";
import { Loading } from "../util/Loading";

export const ProductListing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://fakestoreapi.com/products";
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiURL);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("Erro ao ao buscar os produtos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-wrap gap-4">
      {loading ? (
        <Loading label={"Carregando produtos..."}/>
      ) : (
        data.map((product, index) => (
          <ProductCard
            key={index}
            category={product.category}
            name={product.title}
            img={product.image}
            price={formatCurrency(product.price)}
            priceDiscount={formatCurrency(product.price)}
            id={product.id}
          />
        ))
      )}
    </div>
  );
};
