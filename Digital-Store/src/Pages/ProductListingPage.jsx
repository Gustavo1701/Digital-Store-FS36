import { useState } from "react";
import { FilterGroup } from "../components/FilterGroup";
import { ProductListing } from "../components/ProductListing";

const ProductListingPage = () => {
  const [productCount, setProductCount] = useState(0)

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-baseline">
        <h1><span className="text-dark-gray-2 font-bold text-base">Resultado -</span> {productCount} produto{productCount > 1 ? "s" : ""}</h1>
          <form class="flex items-center gap-2 border border-[var(--dark-gray-2)] rounded-md min-w-[308px] min-h-[60px] px-5  mb-10 mr-3">
            <label
              for="order"
              class="mb-1 text-base font-medium text-[var(--dark-gray-2)]"
            >
              Ordenar por:
            </label>
            <select
              id="order"
              className="text-black flex-1 focus:ring-0 border-none bg-transparent"
            >
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </form>
      </div>
      <div className="flex gap-10">
        <FilterGroup/>
        <ProductListing quantity={(count) => setProductCount(count)}/>
      </div>
    </div>
  );
};

export default ProductListingPage;
