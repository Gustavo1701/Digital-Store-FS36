import { LogoBranca, LogoIconBranco } from "./Logo";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const infos = [
    {
      text: "Sobre Drip Store",
      link: "/about",
    },
    {
      text: "Segurança",
      link: "/security",
    },
    {
      text: "Wishlist",
      link: "/whislist",
    },
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "Trabalhe conosco",
      link: "/trabalhe-conosco",
    },
    {
      text: "Meus Pedidos",
      link: "/my-orders",
    },
  ];

  const category = [
    {
      text: "Camisetas",
      link: "/t-shirts",
    },
    {
      text: "Calças",
      link: "/lags",
    },
    {
      text: "Bonés",
      link: "/caps",
    },
    {
      text: "Headphones",
      link: "/headphones",
    },
    {
      text: "Tênis",
      link: "/boot",
    },
  ];
  const contacts = [
    {
      text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
      link: "/adrress",
    },
    {
      text: "(85) 3051-3411",
      link: "/contact",
    },
  ];
  return (
    <footer className="grid grid-cols-4 gap-x-10 bottom-0 bg-[var(--dark-gray)] h-[445px] px-[9%] pt-16">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <LogoIconBranco />
          <LogoBranca />
        </div>
        <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex gap-8">
          <a href="https://facebook.com" target="_blank">
            <img src={fb} alt="Facebook Icone" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={insta} alt="Instagram Icone" />
          </a>
          <a href="https://x.com/?lang=pt-br" target="_blank">
            <img src={twitter} alt="Twitter Icone" />
          </a>
        </div>
      </div>
      <div>
        <Informacoes title={"Informação"} informations={infos} />
      </div>
      <div>
        <Informacoes title={"Categorias"} informations={category} />
      </div>
      <div>
        <Informacoes title={"Contato"} informations={contacts} />
      </div>
      <div className="col-span-4">
        <hr className="border-t border-[var(--light-gray)] mb-4" />
        <p className="text-center text-white">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
};

export default Footer;

export const Informacoes = ({ title, informations }) => {
  return (
    <div className="text-white w-fit">
      <h2 className="text-2xl mb-8">{title}</h2>
      <ul>
        {informations.map((info, index) => (
          <li key={index} className="mb-2">
            <Link to={info.link} className="hover:underline">
              {info.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
