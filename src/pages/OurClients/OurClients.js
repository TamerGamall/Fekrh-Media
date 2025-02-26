import OurClientsCard from "./OurClientsCard";
import data from "../../data";
import Hero from "../../components/Hero";
function OurClients(){
    return(
        <>
        <Hero title={data.heroSections.Clientes.title} subtitle={data.heroSections.Clientes.subtitle} image={data.heroSections.Clientes.image}/>
        <OurClientsCard/>
        </>
    );
}

export default OurClients;