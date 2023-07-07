import './index.css'
import Logo from '../../assets/logo.svg'
import { Container } from 'react-bootstrap'
import Copyright from './Copyright/index'
import FooterContact from './FooterContact'
import LegalInfo from './LegalInfo/index'
import SocialMedia from './SocialMedia/index'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className='footer'>
            <Container className='footer_container'>
                <div className='logo_slogan'>
                    <Link to='/'>
                        <img src={Logo} alt='Code Craft Logo'/>
                    </Link>
                    <p>Unlock your potential with our courses!</p>
                </div>
                <div className='footer_info'>
                    <FooterContact title="Contact" />
                    <LegalInfo title="Legal Information" />
                    <SocialMedia title="Social Media" />
                </div>
            </Container>
            <Copyright />
        </div>
    )
}

export default Footer