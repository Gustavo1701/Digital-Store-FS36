import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../util/Loading";
import { getProductById } from "../api/productService";
import { ProductDetailsCard } from "./ProductDetailsCard";
import { formatCurrency } from "../util/FormatToBRL";


export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await getProductById(id);
        setProduct(response);
      } catch (error) {
        console.log("Erro ao buscar o produto");
      } finally {
        setLoading(false)
      }
    };

    fetchProduct()
  }, [id]);

  if (loading) {
    return <Loading label="Carregando produto..." />; // Renderiza enquanto carrega
  }

  if (!product) {
    return <p>Produto não encontrado!</p>; // Caso o produto não exista
  }
  
  return (
    <div>
      <ProductDetailsCard
      name={product.title}
      rating={product.rating.rate}
      category={product.category}
      description={product.description}
      id={product.id}
      price={formatCurrency(product.price)}
      priceDiscount={formatCurrency(product.price)}
      img={product.image}
      />
    </div>
  );
};
