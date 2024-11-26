import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import iconLogo from "../assets/vector.png";
import search from "../assets/Search.png";
import buy from "../assets/Buy.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiUser } from "react-icons/fi";


const Header = () => {
  const {auth, setAuth} = useContext(AuthContext)

  const logout = () => {
    if(auth) {
      setAuth(false)
    }
  }

  const location = useLocation();

  // Função para verificar se a rota está ativa
  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <div className="w-full h-[190px] flex justify-center py-6 bg-white gap-8">
        <div className="w-[70%]">
          <div className="flex justify-center items-center gap-8 px-4">
            {/* Logo Section */}
            <Link className="flex items-center  gap-1" to={"/"}>
              <img src={iconLogo} alt="Ícone da Marca" />
              <img className="mt-1.5" src={logo} alt="Logo da Marca" />
            </Link>

            {/* Search Input */}
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
            {/* Register Link */}
            {auth ? (
              ""
            ) : (
              <Link className="underline" to={"/register"}>
              Cadastre-se
              </Link>
            )}
          </div>

          {/* Navigations Links */}
          <nav>
            <ul className="flex gap-8 ml-4 mt-16">
              <li>
                <Link to={"/home"} className="font-normal text-xl text-[var(--dark-gray)] hover:text-[var(--primary)]  ">

                  <div
                    className={`mt-1 border-b ${
                      isActive("/home")
                        ? "border-[var(--primary)] border-b-2 font-semibold text-[var(--primary)]"
                        : "border-none"
                    }`}
                  >Home</div>
                </Link>
              </li>
              <li>
                <Link to={"/produtos"} className="font-normal text-xl text-[var(--dark-gray)] hover:text-[var(--primary)]  ">
                  <div
                    className={`mt-1 border-b ${
                      isActive("/produtos")
                        ? "border-[var(--primary)] border-b-2 font-semibold text-[var(--primary)]"
                        : "border-none"
                    }`}
                  >Produtos</div>
                </Link>
              </li>
              <li>
                <Link className="font-normal text-xl text-[var(--dark-gray)] hover:text-[var(--primary)]  ">
                  <div
                    className={`mt-1 border-b ${
                      isActive("/categorias")
                        ? "border-[var(--primary)] border-b-2 font-semibold text-[var(--primary)]"
                        : "border-none"
                    }`}
                  >Categorias</div>
                </Link>
              </li>
              <li>
                <Link className="font-normal text-xl text-[var(--dark-gray)] hover:text-[var(--primary)]  ">
                  <div
                    className={`mt-1 border-b ${
                      isActive("/meus-pedidos")
                        ? "border-[var(--primary)] border-b-2 font-semibold text-[var(--primary)]"
                        : "border-none"
                    }`}
                  >Meus Pedidos</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Login Button and Cart Icon */}
        {auth ? (
          ""
        ): (
          <Link to={"/login"}>
          <button className="w-36 h-10 mt-2 text-white rounded-lg bg-[var(--primary)]">
            Entrar
          </button>
        </Link>
        )}
        <span className="mt-4">
          <img src={buy} alt="Ícone de Carrinho de Compras" />
        </span>
        {auth ? (
          <div className="flex gap-2 mt-5">
            <Link to={"/profile"}>
              <FiUser size={24} color="var(--primary)"/>
            </Link>
            <p>Olá Admin</p>
          </div>
        ) : (
          ""
        )}
        <button className="underline mb-20" onClick={logout}>Logout</button>
        
      </div>
      
    </header>
  );
};

export default Header;

export const SimpleHeader = () => {
  return (
    <header className="w-full bg-white flex pl-36 align-middle h-24">
      <Link className="flex items-center  gap-1" to={"/"}>
        <img src={iconLogo} alt="Ícone da Marca" />
        <img className="mt-1.5" src={logo} alt="Logo da Marca" />
      </Link>
    </header>
  );
};
