import { useState } from "react";

export const Input = ({id, labelSize = "text-xs", label, type = "text", name, placeholder, onChange, value}) => {
    return ( 
        <>
            <label htmlFor={id} className={`${labelSize} text-[var(--dark-gray-2)]`}>{label}</label>
            <input className={"outline-none rounded w-full h-12 p-3 bg-[var(--light-gray-3)]"} type={type} value={value} id={id} name={name} placeholder={placeholder} onChange={onChange}/>
        </>
     );
}







