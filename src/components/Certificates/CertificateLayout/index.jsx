import { useState } from 'react'
import CertificateIcon from '../CertificateIcon/index'
import './index.css'

import { motion } from 'framer-motion'

const CertificateLayout = ( {className, logo} ) => {
    const [hover, setHover] = useState(false)
    return (
        <motion.div 
            className={`certificate ${className}`}
            animate={
                {
                    rotate: hover ? -30 : -5
                }
            }
            onMouseEnter={() => {
                setHover(true)
            }}
            onMouseOut={() => {
                setHover(false)
            }}
        >
            <div className="cert_icon">
                <CertificateIcon imageSource={logo} />
            </div>
        </motion.div>
    )
}

export default CertificateLayout