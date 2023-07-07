import ContactFormContainer from '../components/ContactFormContainer'
import { Container } from 'react-bootstrap'
import './contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <Container>
                <ContactFormContainer />
            </Container>
        </div>
    )
}

export default Contact