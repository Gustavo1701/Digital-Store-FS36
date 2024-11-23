import produto1 from '../assets/img/collection-1.png';
import produto2 from '../assets/img/collection-2.png';
import produto3 from '../assets/img/collection-3.png';
import { Button } from './Button';

const Destaque = () => {
    return (
        <>
            <div className="my-8">
                <h1 className="text-[--dark-gray-2] font-bold mb-6">Coleções em destaque</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {/* Item 1 */}
                    <div className="relative">
                        <img
                            src={produto1}
                            alt="Produto 1"
                            className="w-full h-[251px] object-cover rounded-lg"
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
                        <Button type={Button} color={"white"} label={"Comprar"} labelColor={"[var(--primary)]"} className={"absolute bottom-5 left-28 transform -translate-x-1/2 text-lg font-Inter font-bold rounded "} />
                    </div>

                    {/* Item 3 */}
                    <div className="relative">
                        <img
                            src={produto3}
                            alt="Produto 3"
                            className="w-full h-[251px] object-cover rounded-lg"
                        />
                        <Button type={Button} color={"white"} label={"Comprar"} labelColor={"[var(--primary)]"} className={"absolute bottom-5 left-28 transform -translate-x-1/2 text-lg font-Inter font-bold rounded "} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Destaque;
