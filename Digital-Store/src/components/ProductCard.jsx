export const ProductCard = ({name, img, id, price, priceDiscount, category}) => {
    return ( 
        <div id={id} className="w-[292px] h-fit">
            <div className="mb-2 rounded-md w-[292px] h-[321px] bg-white p-10">
                <img className="w-full h-full" src={img}  alt="" />
            </div>
            <span className="text-xs font-bold text-[var(--light-gray)]">{category}</span>
            <p className="text-2xl text-[var(--dark-gray-2)] line-clamp-2">{name}</p>
            <span className="text-[var(--light-gray)] line-through text-2xl mr-2">{price}</span>
            <span className="font-bold text-2xl">{priceDiscount}</span>
        </div>
     );
}