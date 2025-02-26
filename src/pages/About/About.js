
import Hero from '../../components/Hero'
import data from "../../data";
import AboutCard from './AboutCard';
const About = () => {
    
    return (
        <>
            <Hero title={data.heroSections.about.title} subtitle={data.heroSections.about.subtitle} image={data.heroSections.about.image} />
            <AboutCard/>
        </>
    );
};

export default About;
