import produto1 from '../assets/img/collection-1.png';
import produto2 from '../assets/img/collection-2.png';
import produto3 from '../assets/img/collection-3.png';
import { Button } from './Button';

const Destaque = () => {
    return (
        <>
            <div className="w-full  flex justify-center ">

                <div className="my-6">
                    <h1 className="text-[--dark-gray-2] font-bold mb-6">Coleções em destaque</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {/* Item 1 */}
                        <div className="relative">
                            <img
                                src={produto1}
                                alt="Produto 1"
                                className="w-full h-[251px] object-cover rounded-lg"
                            />

                            <input
                                type="text"
                                value="30% OFF"
                                readOnly
                                className="absolute bottom-52 left-20 transform -translate-x-1/2 font-Inter font-bold bg-[var(--destaque)] text-[var(--dark-gray-2)] rounded-full py-1 text-center w-28"
                            />

                            <Button type={Button} color={"white"} label={"Comprar"} labelColor={"[var(--primary)]"} className={"absolute bottom-5 left-28 transform -translate-x-1/2 text-lg font-Inter font-bold rounded "} />
                        </div>

                        {/* Item 2 */}
                        <div className="relative">
                            <img
                                src={produto2}
                                alt="Produto 2"
                                className="w-full h-[251px] object-cover rounded-lg"
                            />

                            <input
                                type="text"
                                value="30% OFF"
                                readOnly
                                className="absolute bottom-52 left-20 transform -translate-x-1/2 font-Inter font-bold bg-[var(--destaque)] text-[var(--dark-gray-2)] rounded-full py-1 text-center w-28"
                            />

                            <Button type={Button} color={"white"} label={"Comprar"} labelColor={"[var(--primary)]"} className={"absolute bottom-5 left-28 transform -translate-x-1/2 text-lg font-Inter font-bold rounded "} />
                        </div>

                        {/* Item 3 */}
                        <div className="relative">
                            <img
                                src={produto3}
                                alt="Produto 3"
                                className="w-full h-[251px] object-cover rounded-lg"
                            />

                            <input
                                type="text"
                                value="30% OFF"
                                readOnly
                                className="absolute bottom-52 left-20 transform -translate-x-1/2 font-Inter font-bold bg-[var(--destaque)] text-[var(--dark-gray-2)] rounded-full py-1 text-center w-28"
                            />

                            <Button type={Button} color={"white"} label={"Comprar"} labelColor={"[var(--primary)]"} className={"absolute bottom-5 left-28 transform -translate-x-1/2 text-lg font-Inter font-bold rounded "} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Destaque;
