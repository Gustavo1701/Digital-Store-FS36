import { Link } from "react-router-dom";

export const Section = ({className, title, titleSize = "text-2xl", titleAlign = "left", children, link}) => {

    return ( 
        <section className={className}>
            <div className="flex items-center justify-between">
            <p className={`${titleSize} text-[var(--dark-gray-2)] font-semibold ${titleAlign === "center" ? "mx-auto text-center" : ""}`}>
                    {title}
                </p>
                {link && <Link className="text-[var(--primary)] text-lg hover:font-semibold" to={link.href}>
                    {link.text} &#129046;
                </Link>}
            </div>
            <div className="mt-4">
                {children}
            </div>
            
        </section>
     );
}