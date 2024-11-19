import { Link } from "react-router-dom";

export const Section = ({title, titleAlign = "left", children}) => {
    const link = {
        text: "Ver todos",
        href: "/produtos"
    }
    return ( 
        <section>
            <div className="flex items-center justify-between">
            <p className={`text-2xl text-[var(--dark-gray-2)] ${titleAlign === "center" ? "mx-auto text-center" : ""}`}>
                    {title}
                </p>
                <Link className="text-[var(--primary)] text-lg" to={link.href}>
                    {link.text} &#129046;
                </Link>
            </div>
            <div className="mt-4">
                {children}
            </div>
            
        </section>
     );
}