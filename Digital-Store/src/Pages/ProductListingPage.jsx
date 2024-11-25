import { useState } from "react";
import { ProductListing } from "../components/ProductListing";

const ProductListingPage = () => {
  const [selectedOption, setSelectedOption] = useState("Maior preço");
  const handleSelection = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-end">
          <form class="flex items-end border border-[var(--dark-gray-2)] rounded-md min-w-[308px] min-h-[60px] px-5 py-2 mb-10 mr-3">
            <label
              for="order"
              class="mb-2 text-base font-medium text-[var(--dark-gray-2)]"
            >
              Ordenar por:
            </label>
            <select
              id="order"
              className="text-black flex-1 border-none  bg-transparent"
            >
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </form>
      </div>

      <ProductListing />
    </div>
  );
};

export default ProductListingPage;
