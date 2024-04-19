import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import ServiceScreen from "../../components/service-screen/ServiceScreen";
import StartingScreen from "../../components/starting-screen/StartingScreen";
import UsScreen from "../../components/us-screen/UsScreen";




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