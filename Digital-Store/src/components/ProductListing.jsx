import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { formatCurrency } from "../util/FormatToBRL";
import { Loading } from "../util/Loading";
import { useNavigate } from "react-router-dom";

import { getAllProducts } from "../api/productService";

export const ProductListing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getAllProducts();
      console.log(res);
      setData(res);
    } catch (error) {
      console.log("Erro ao ao buscar os produtos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSelectProduct = (id) => {
    navigate(`/produto/${id}`);
  }
  return (
    <div className="container mx-auto">
      {loading ? (
        <Loading label={"Carregando produtos..."} />
      ) : (
        <div className="flex flex-wrap gap-4">
          {data.map((product, index) => (
          <ProductCard
            key={index}
            category={product.category}
            name={product.title}
            img={product.image}
            id={product.id}
            price={formatCurrency(product.price)}
            priceDiscount={formatCurrency(product.price)}
            onClick={() => handleSelectProduct(product.id)}
          />
          ))}
        </div>
      )}
    </div>
  );
};
