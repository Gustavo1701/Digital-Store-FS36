import { useState } from "react";

export const Input = ({id, labelSize = "text-xs", label, type = "text", placeholder, onChange}) => {
    return ( 
        <>
            <label htmlFor={id} className={`${labelSize} text-[var(--dark-gray-2)]`}>{label}</label>
            <input className={"outline-none rounded w-full h-12 p-3 bg-[var(--light-gray-3)]"} type={type} id={id} placeholder={placeholder} onChange={onChange}/>
        </>
     );
}







