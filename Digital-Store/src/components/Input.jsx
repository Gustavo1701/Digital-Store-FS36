export const Input = ({id, label, type = "text", placeholder, onChange}) => {
    return ( 
        <>
            <label htmlFor={id} className="text-xs text-[var(--dark-gray-2)]">{label}</label>
            <input className="outline-none w-full h-10 p-3 bg-[var(--light-gray-3)]" type={type} id={id} placeholder={placeholder} onChange={onChange}/>
        </>
     );
}