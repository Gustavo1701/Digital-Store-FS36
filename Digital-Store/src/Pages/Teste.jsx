import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';
import iconLogo from '../assets/vector.png'
import search from '../assets/Search.png'
import buy from '../assets/Buy.png'

import Gallery from '../components/Gallery.jsx'

export const Teste = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                <div className="w-full h-[190px] flex justify-center py-6 gap-8">
                    
                    <div className="w-full max-w-screen-xl flex justify-between items-center px-4">
                        {/* Logo Section */}
                        <Link className="flex items-center gap-1 mx-auto md:mx-0" to={"/"}>
                            <img src={iconLogo} alt="Ícone da Marca" className="w-8 md:w-10" />
                            <img src={logo} alt="Logo da Marca" className="mt-1.5 w-36 md:w-60" />
                        </Link>

                        {/* Menu Toggle Button (Visível apenas em telas pequenas) */}
                        <button
                            className="text-3xl absolute left-4 top-24 transform -translate-y-1/2 md:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            &#9776;
                        </button>

                        {/* Barra de Pesquisa, Cadastre-se, Entrar e Carrinho */}
                        <div className="flex items-center gap-4 md:gap-8">
                            {/* Barra de Pesquisa - Visível apenas em telas grandes */}
                            <div className="relative flex-1 hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Pesquisar produto..."
                                    className="rounded-lg outline-none w-96 h-14 p-4 bg-[var(--light-gray-3)]"
                                />
                                <img
                                    src={search}
                                    alt="Search"
                                    className="absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 w-5"
                                />
                            </div>

                            {/* Ícone de Pesquisa - Visível apenas em telas pequenas */}
                            <div className="md:hidden relative">
                                <img
                                    src={search}
                                    alt="Search"
                                    className="cursor-pointer w-6 h-6"
                                />
                            </div>

                            {/* Link de Cadastro - Visível apenas em telas grandes */}
                            <Link className="hidden md:block underline" to={"/register"}>
                                Cadastre-se
                            </Link>

                            {/* Botão de "Entrar" - Visível apenas em telas grandes */}
                            <button className="hidden md:block w-36 h-10 text-white rounded-lg bg-[var(--primary)]">
                                Entrar
                            </button>

                            {/* Botão de Carrinho de Compras */}
                            <span className="md:block">
                                <img src={buy} alt="Carrinho de Compras" className="w-8 h-8" />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Links do Menu - Responsivo */}
                <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:block mt-4`}>
                    <ul className="flex flex-col md:flex-row gap-8 ml-4">
                        <li>
                            <Link to={"/home"} className="font-normal text-xl text-[var(--dark-gray)] hover:text-[var(--primary)]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/produtos"} className="font-normal text-xl text-[var(--dark-gray)] hover:text-[var(--primary)]">
                                Produtos
                            </Link>
                        </li>
                        <li>
                            <Link to={"/categorias"} className="font-normal text-xl text-[var(--dark-gray)] hover:text-[var(--primary)]">
                                Categorias
                            </Link>
                        </li>
                        <li>
                            <Link to={"/meus-pedidos"} className="font-normal text-xl text-[var(--dark-gray)] hover:text-[var(--primary)]">
                                Meus Pedidos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>


            <Gallery
                slides={[
                    '../public/home-slide-1.jpeg',
                    '../public/home-slide-2.jpeg',
                    '../public/home-slide-3.jpeg',
                    '../public/home-slide-5.jpeg',
                    '../public/home-slide-6.jpeg',
                    '../public/home-slide-7.jpeg',
                    '../public/home-slide-8.jpeg',
                ]}
            />



        </>


    );
}