import './Home.css'
import AboutSection from "../components/About/About";
import Person from "../components/Person/Person";
import Developer from "../components/Developer/Developer";

function Home() {
    return (
        <>
            <AboutSection/>
            <div className="info-section">
                <Person/>
                <Developer/>
            </div>
        </>
    )
}

export default Home