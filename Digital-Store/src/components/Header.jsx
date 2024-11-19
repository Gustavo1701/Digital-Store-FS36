import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import iconLogo from "../assets/vector.png";
import search from "../assets/Search.png";
import buy from "../assets/Buy.png"

const Header = () => {
  return (
    <div>
      <div className="w-full h-[190px] flex justify-center py-6  gap-8">
        <div className="w-[70%]">
          <div className="flex justify-center items-center gap-8 px-4">
            <div className="flex items-center gap-1">
              <img src={iconLogo} alt="Icone Logo Marca" />
              <img className="mt-1.5" src={logo} alt="Logo Marca" />
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="rounded-lg outline-none w-full h-14 p-4 bg-[var(--light-gray-3)]"
              />
              <img
                src={search}
                alt="Search"
                className="absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 w-5"
              />
            </div>

            <Link className="underline">Cadastre-se</Link>
          </div>
          <ul className="flex gap-8 ml-4 mt-16">
            <li>
              <Link className="font-normal text-[var(--dark-gray)] hover:text-[var(--primary)] hover:font-semibold hover:underline ">Home</Link>
            </li>
            <li>
              <Link className="font-normal text-[var(--dark-gray)] hover:text-[var(--primary)] hover:font-semibold hover:underline ">Produtos</Link>
            </li>
            <li>
              <Link className="font-normal text-[var(--dark-gray)] hover:text-[var(--primary)] hover:font-semibold hover:underline ">Categorias</Link>
            </li>
            <li>
              <Link className="font-normal text-[var(--dark-gray)] hover:text-[var(--primary)] hover:font-semibold hover:underline ">Meus Pedidos</Link>
            </li>
          </ul>
        </div>
        <button className="w-36 h-10 mt-2 text-white rounded-lg bg-[var(--primary)]">
          Entrar
        </button>
        <span className="mt-4">
            <img src={buy} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Header;
