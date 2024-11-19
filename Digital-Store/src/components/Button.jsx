export const Button = ({label, labelColor, color}) => {
    return ( 
        <>
            <button className={`w-40 h-10 bg-${color} text-${labelColor} rounded-lg`}>{label}</button>
        </>
     );
}