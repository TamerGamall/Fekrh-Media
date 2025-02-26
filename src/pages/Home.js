import Hero from "../components/Hero";

import data from "../data";
import AboutCard from "./About/AboutCard";
import OurClientsCard from "./OurClients/OurClientsCard";
import ServicesCard from "./Services/ServicesCard";
function Home (){
    return(
        <>
        <Hero title={data.heroSections.home.title} subtitle={data.heroSections.home.subtitle} image={data.heroSections.home.image} />
        <OurClientsCard/>
        <ServicesCard/>
        <AboutCard />
        </>
    );
}
export default Home;