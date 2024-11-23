export const Button = ({label, labelColor, color, type, className}) => {
    return ( 
        <>
            <button type={type} className={`${className} w-40 h-10 bg-${color} text-${labelColor} rounded-lg`}>{label}</button>
        </>
     );
}