import banner from "../assets/specialoffertennis.png";
import ellipse from "../assets/Ellipse.png";

function SpecialOffer() {
    return (
      <section className="w-full flex-wrap flex justify-evenly p-10 mt-20 lg:mt-48 mb-20 items-center">
        <div className="relative mx-auto mb-20">
          
          <img
            src={banner}
            alt="oferta especial"
            className="w-[500px] lg:w-[600px] relative z-20" 
          />
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src={ellipse} alt="elipse" className="w-[600px] lg:w-[600px]" /> 
          </div>
        </div>
        <div className="flex flex-col max-w-[514px] gap-y-6 lg:gap-y-4">
          <span className="text-[var(--warning)] lg:text-[var(--primary)] leading-[24px] tracking-[.75px] font-inter text-[16px] font-[700]">
            Oferta especial
          </span>
          <h1 className="leading-[50px] tracking-[1px] font-inter text-[48px] font-extrabold">
            Air Jordan edição de colecionador
          </h1>
          <p className="text-[var(--dark-gray-2)] leading-[28px] tracking-[.75px] font-inter text-[16px] font-[400]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum asperiores repellat impedit, perspiciatis exercitationem officia fugiat aperiam vel deserunt a, et quo, reiciendis eum dolor quia quam maxime odio. Blanditiis, beatae! Enim rem adipisci eius neque iusto quis quae doloremque debitis provident officia nisi laboriosam ratione aperiam a, earum ullam quasi repellendus harum doloribus reiciendis libero obcaecati! Laudantium sapiente autem eius. Provident unde, molestias accusantium veritatis esse expedita assumenda iure.
          </p>
          <button className="bg-[var(--primary)] w-[220px] text-white font-bold py-2 px-10 rounded-lg hover:bg-[var(--tertiary)] cursor-pointer">
            Ver Oferta
          </button>
        </div>
      </section>
    );
}

export default SpecialOffer;
