import Hero from '../components/Hero'
import { Container } from 'react-bootstrap'
import './home.css'
import OurMission from '../components/OurMission'
import BrowseCourses from '../components/BrowseCourses/index'
import Certificates from '../components/Certificates/index'
import Reviews from '../components/Reviews/index'
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions/index'

const Home = () => {
    return (
        <div className="home_container">
            <Container>
                <Hero />
                <OurMission />
                <BrowseCourses />
                <Certificates />
                <Reviews />
                <FrequentlyAskedQuestions />
            </Container>
        </div>
    )
}

export default Home