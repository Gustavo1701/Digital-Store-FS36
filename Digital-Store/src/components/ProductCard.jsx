export const ProductCard = ({name, img, id, price, priceDiscount, category}) => {
    return ( 
        <div id={id} className="w-[292px] h-fit">
            <img className="mb-2 rounded-md w-[292px] h-[321px]" src={img}  alt="" />
            <span className="text-xs text-[var(--light-gray)]">{category}</span>
            <p className="text-2xl text-[var(--dark-gray-2)]">{name}</p>
            <span className="text-[var(--light-gray)] line-through text-2xl mr-2">${price}</span>
            <span className="font-bold text-2xl">${priceDiscount}</span>
        </div>
     );
}