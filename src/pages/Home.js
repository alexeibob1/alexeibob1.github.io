import './Home.css'
import NavigationBar from "../components/Navigation/NavigationBar";
import AboutSection from "../components/About/About";
import Person from "../components/Person/Person";
import Developers from "../components/Developers/Developers";

function Home() {
    return (
        <>
            <NavigationBar/>
            <AboutSection/>
            <div className="info-section">
                <Person/>
                <Developers/>
            </div>


        </>
    )
}

export default Home