
export const Input = ({id, labelSize = "text-xs", label, height = "h-12", type = "text", name, placeholder, onChange, value}) => {
    return ( 
        <div className="my-2">
            <label htmlFor={id} className={`${labelSize} text-[var(--dark-gray-2)]`}>{label}</label>
            <input className={`outline-none border-none focus:outline-none focus:ring-0 rounded w-full ${height} p-3 bg-[var(--light-gray-3)]`} type={type} value={value} id={id} name={name} placeholder={placeholder} onChange={onChange}/>
        </div>
     );
}







