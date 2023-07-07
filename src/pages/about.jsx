import { Container } from 'react-bootstrap'
import AboutCodeCraft from '../components/AboutCodeCraft'
import AboutUsMission from '../components/AboutUsMission'
import Mentors from '../components/Mentors'

const About = () => {
    return (
        <Container>
            <AboutCodeCraft />
            <AboutUsMission />
            <Mentors />
        </Container>
    )
}

export default About