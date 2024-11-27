import { useState } from "react";
import { Input } from "../components/Input";

const CadastroProduto = () => {
  // Estado para os dados do formulário
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [precoDesconto, setPrecoDesconto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica para enviar os dados do produto
    const produto = {
      titulo,
      imagem,
      descricao,
      preco,
      precoDesconto,
      categoria,
      quantidade,
    };
    console.log("Produto cadastrado:", produto);
    // Resetando o formulário
    setTitulo("");
    setImagem(null);
    setDescricao("");
    setPreco("");
    setPrecoDesconto("");
    setCategoria("");
    setQuantidade("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        {/* Título */}
        <div className="mb-4">
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
            Título do Produto
          </label>
          <Input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-0"
          />
        </div>

        {/* Imagem */}
        <div className="mb-4">
          <label htmlFor="imagem" className="block text-sm font-medium text-gray-700">
            Imagem do Produto
          </label>
          <Input
            type="file"
            id="imagem"
            accept="image/*"
            onChange={(e) => setImagem(e.target.files[0])}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Descrição */}
        <div className="mb-4">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            rows="4"
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-0"
          />
        </div>

        {/* Preço */}
        <div className="mb-4">
          <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
            Preço
          </label>
          <Input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            min="0"
            step="0.01"
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-0"
          />
        </div>

        {/* Preço com Desconto */}
        <div className="mb-4">
          <label htmlFor="precoDesconto" className="block text-sm font-medium text-gray-700">
            Preço com Desconto
          </label>
          <Input
            type="number"
            id="precoDesconto"
            value={precoDesconto}
            onChange={(e) => setPrecoDesconto(e.target.value)}
            min="0"
            step="0.01"
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-0"
          />
        </div>

        {/* Categoria */}
        <div className="mb-4">
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
            Categoria
          </label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-0"
          >
            <option value="">Selecione uma categoria</option>
            <option value="Roupas">Roupas</option>
            <option value="Calçados">Calçados</option>
            <option value="Eletrônicos">Eletrônicos</option>
          </select>
        </div>

        {/* Quantidade */}
        <div className="mb-4">
          <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
            Quantidade em Estoque
          </label>
          <Input
            type="number"
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
            min="0"
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-0"
          />
        </div>

        {/* Botão de Enviar */}
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white p-3 rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-0"
          >
            Cadastrar Produto
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroProduto;
