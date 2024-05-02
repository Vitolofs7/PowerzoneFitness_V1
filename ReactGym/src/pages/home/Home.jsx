import Header from "../../components/header/Header";
import ServiceScreen from "../../components/service-screen/ServiceScreen";
import StartingScreen from "../../components/startingScreen/StartingScreen";
import UsScreen from "../../components/usScreen/UsScreen";

import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";




function Home() {
    return (
        <>
            <Header />
            <StartingScreen />
            <UsScreen />
            <ServiceScreen />

            <Gallery />

            <Footer />

        </>
    )
}
export default Home;