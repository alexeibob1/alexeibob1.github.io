import './Home.css'
import NavigationBar from "../components/Navigation/NavigationBar";
import AboutSection from "../components/About/About";
import Person from "../components/Person/Person";
import Developer from "../components/Developer/Developer";

function Home() {
    return (
        <>
            <NavigationBar/>
            <AboutSection/>
            <div className="info-section">
                <Person/>
                <Developer/>
            </div>


        </>
    )
}

export default Home