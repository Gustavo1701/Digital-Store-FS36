import Categoria from "../components/Categoria-Destaque";
import Gallery from "../components/Gallery";
import SpecialOffer from "../components/SpecialOffer";
import Destaque from "../components/Collection-Destaque";
import FeaturedBanner from "../components/FeaturedBanner";


const HomePage = () => {
    return (
        <>
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
            
            <FeaturedBanner />

            <Destaque/>

            <Categoria/>

            <SpecialOffer />

            
        </>
    );
}

export default HomePage;