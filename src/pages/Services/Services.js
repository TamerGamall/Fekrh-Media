import ServicesCard from "./ServicesCard";
import Hero from "../../components/Hero";
import data from "../../data";
function Services(){
    return(
        <>
        <Hero
                title={data.heroSections.Services.title}
                subtitle={data.heroSections.Services.subtitle}
                image={data.heroSections.Services.image}
            />
        <ServicesCard />
        </>
    );
}
export default Services;