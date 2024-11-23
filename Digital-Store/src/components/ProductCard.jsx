export const ProductCard = ({name, img, price, priceDiscount, category}) => {
    return ( 
        <div className="w-[292px] h-[400px]">
            <img className="mb-2 rounded-md" src={img} width={"100%"} max-height={"321px"} alt="" />
            <span className="text-xs text-[var(--light-gray)]">{category}</span>
            <p className="text-2xl text-[var(--dark-gray-2)]">{name}</p>
            <span className="text-[var(--light-gray)] line-through text-2xl mr-2">{price}</span>
            <span className="font-bold text-2xl">{priceDiscount}</span>
        </div>
     );
}