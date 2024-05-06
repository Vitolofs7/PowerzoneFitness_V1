import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import ServiceScreen from "../../components/service-screen/ServiceScreen";
import StartingScreen from "../../components/starting-screen/StartingScreen";
import UsScreen from "../../components/us-screen/UsScreen";
import AddSuggestion from "../../components/add-suggestion/AddSuggestion";





function Home() {
    return (
        <>
            <Header />
            <StartingScreen />
            <UsScreen />
            <ServiceScreen />
            <Gallery />
            <AddSuggestion />
            <Footer />

        </>
    )
}
export default Home;