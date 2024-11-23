import Gallery from "../components/Gallery";
import { Section } from "../components/Section";

const HomePage = () => {
    return (
        <>
            <Section
                title={"Produtos em Alta"}


            />

            <Gallery
                slides={[
                    '../public/home-slide-1.jpeg',
                    '../public/home-slide-2.jpeg',
                    '../public/home-slide-3.jpeg',
                    '../public/home-slide-5.jpeg',
                    '../public/home-slide-6.jpeg',
                    '../public/home-slide-7.jpeg',
                    '../public/home-slide-8.jpeg',
                ]}
            />
        </>
    );
}

export default HomePage;