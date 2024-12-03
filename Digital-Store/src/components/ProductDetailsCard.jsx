import { useState } from "react";
import { TbStar } from "react-icons/tb";import Gallery from "./Gallery";
export const ProductDetailsCard = ({
  name,
  category,
  mark,
  id,
  img,
  price,
  priceDiscount,
  description,
  rating,
}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const coresETamanhos = [
    { cor: "red", tamanhos: ["P", "M", "G"] },
    { cor: "blue", tamanhos: ["PP", "M", "GG"] },
    { cor: "green", tamanhos: ["P", "M"] },
  ];

  const tamanhosDisponiveis = selectedColor !== null
  ? coresETamanhos[selectedColor].tamanhos
  : [];

  const handleColorChange = (index) => {
    setSelectedColor(index); // Altera a cor selecionada
    setSelectedSize(null); // Limpa o tamanho selecionado
  };

  return (
    <div className="container flex flex-col md:flex-row p-6 md:p-12">
      <div className="flex-1">
        <div className="bg-purple-100 p-4 rounded-lg">
          <Gallery slides={[img]} />
        </div>
        <div className="flex justify-between mt-4">
          <img
            src={[img]}
            alt="Thumbnail 1"
            className="w-20 h-20 border-2 border-pink-500 rounded-lg"
          />
        </div>
      </div>
      <div className="flex-1 mt-6 md:mt-0 md:ml-12">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-500">
          {category} | {mark} | REF:{id}
        </p>
        <div className="flex items-center mt-2">
          <div className="flex items-center gap-1">
            <TbStar size={24} cursor={"pointer"} stroke="gray" className="fill-transparent hover:fill-[var(--warning)]"/>
            <TbStar size={24} cursor={"pointer"} stroke="gray" className="fill-transparent hover:fill-[var(--warning)]"/>
            <TbStar size={24} cursor={"pointer"} stroke="gray" className="fill-transparent hover:fill-[var(--warning)]"/>
            <TbStar size={24} cursor={"pointer"} stroke="gray" className="fill-transparent hover:fill-[var(--warning)]"/>
            <TbStar size={24} cursor={"pointer"} stroke="gray" className="fill-transparent hover:fill-[var(--warning)]"/>
          </div>
          <span className="ml-2 text-[var(--warning)] font-medium">
            {rating}
          </span>
          <span className="ml-2 text-gray-500">(90 avaliações)</span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-2xl font-bold">{price}</span>
          <span className="ml-2 text-gray-400 line-through">
            {priceDiscount}
          </span>
        </div>
        <p className="mt-4 text-gray-700">Descrição do produto</p>
        <p className="text-gray-500">{description}</p>
        <div className="mt-4">
        <div className="mt-4">
          <p className="text-gray-700">Cor</p>
          <div className="flex gap-2 mt-2">
            {coresETamanhos.map((item, index) => (
              <button
                key={index}
                onClick={() => handleColorChange(index)}
                className={`w-fit h-fit p-1 rounded border-2 ${
                  selectedColor === index ? "border-[var(--primary)]" : ""
                }`}
              >
                {item.cor}
              </button>
            ))}
          </div>
        </div>
          <p className="text-gray-700">Tamanho</p>
          <div className="flex mt-2 gap-2">
            {tamanhosDisponiveis.map((tamanho, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(i)}
                className={`w-full h-fi p-1 border-2 text-black  rounded-lg ${
                    selectedSize === i ? "border-[var(--primary)]" : ""
                  }`}
              >
                {tamanho}
              </button>
            ))}
          </div>
        </div>

        
        <button className="mt-6 w-1/3 bg-[var(--warning)] hover:hover:bg-[rgba(255,166,0,0.81)] text-white py-3 rounded-lg font-bold">
          COMPRAR
        </button>
      </div>
    </div>
  );
};
