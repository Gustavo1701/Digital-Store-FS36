import logoMarca from "../assets/logo.png"
import logoBranca from "../assets/logoBranca.png"
import logoIconBranco from "../assets/VectorBranco.png"
export const Logo = () => {
    return ( 
        <>
            <img className="w-[253px] h-[44px]" src={logoMarca} alt="Logo da Marca" />
        </>
     );
}

export const LogoBranca = () => {
    return ( 
        <>
            <img className="w-[230px] h-[35px] mt-1" src={logoBranca} alt="Logo da Marca" />
        </>
     );
}

export const LogoIconBranco = () => {
    return ( 
        <>
            <img src={logoIconBranco} alt="Logo da Marca" />
        </>
     );
}