const ProductListingPage = () => {
    return (
        <>
        <div className="w-[308px] h-[60px]">
            <label className="text-base text-[var(--dark-gray-2)]" htmlFor="filter">Ordenar por</label>
            <select name="filter" id="filter">
                <option value="mais relevantes">mais relevantes</option>
            </select>
        </div>
        </>
    );
}
 
export default ProductListingPage;