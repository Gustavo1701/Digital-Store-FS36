import categoria1 from '../assets/img/categoria-1.png';
import categoria2 from '../assets/img/categoria-2.png';
import categoria3 from '../assets/img/categoria-3.png';
import categoria4 from '../assets/img/categoria-4.png';
import categoria5 from '../assets/img/categoria-5.png';

const Categoria = () => {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="my-6 text-center">
                    <h1 className="text-[--dark-gray-2] font-bold mb-6">Categorias em destaque</h1>

                    <div className="w-full overflow-x-auto">
                        <div className="flex gap-3">
                           
                            {/* Categoria 1 */}
                            <div className="w-[104px]">
                                <img
                                    src={categoria1}
                                    alt="Categoria 1"
                                    className="w-full h-[138px] object-cover rounded-lg"
                                />
                            </div>

                            {/* Categoria 2 */}
                            <div className="w-[104px]">
                                <img
                                    src={categoria2}
                                    alt="Categoria 2"
                                    className="w-full h-[138px] object-cover rounded-lg"
                                />
                            </div>

                            {/* Categoria 3 */}
                            <div className="w-[104px]">
                                <img
                                    src={categoria3}
                                    alt="Categoria 3"
                                    className="w-full h-[138px] object-cover rounded-lg"
                                />
                            </div>

                            {/* Categoria 4 */}
                            <div className="w-[104px]">
                                <img
                                    src={categoria4}
                                    alt="Categoria 4"
                                    className="w-full h-[138px] object-cover rounded-lg"
                                />
                            </div>

                            {/* Categoria 5 */}
                            <div className="w-[104px]">
                                <img
                                    src={categoria5}
                                    alt="Categoria 5"
                                    className="w-full h-[138px] object-cover rounded-lg"
                                />
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default Categoria;