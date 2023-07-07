import CertificateLayout from '../CertificateLayout'
import './index.css'

import ReactLogo from '../../../assets/react.svg'
import NetLogo from '../../../assets/netcore.png'
import FigmaLogo from '../../../assets/figma.svg'


const CertificateContainer = () => {
    return (
        <div className="certificate_container">
            <CertificateLayout logo={ReactLogo} className="blue" />
            <CertificateLayout logo={NetLogo} className="purple" />
            <CertificateLayout logo={FigmaLogo} className="green" />

        </div>
    )
}

export default CertificateContainer