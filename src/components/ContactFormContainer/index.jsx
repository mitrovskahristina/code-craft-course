import ContactForm from "../ContactForm";
import ContactInfo from "./ContactInfo";
import { Facebook, Twitter, Youtube, TelephoneFill, EnvelopeAtFill, GeoAltFill } from 'react-bootstrap-icons'
import { motion } from "framer-motion";

import './index.css'
import { Link } from "react-router-dom";

const ContactFormContainer = () => {
    return (
        <div className="contact_form_container">
            <div className="contact_banner">
                <h1>Get in Touch with Us</h1>
                <p>
                    We would love to hear from you! If you have any questions, feedback,
                    or just want to say hello, please don't hesitate to get in touch with us.
                    You can reach us using the contact form below, or find our contact details
                    further down the page.
                </p>
                <div className="contact_icons">
                    <ContactInfo
                        icon={<TelephoneFill />}
                        text="(+389) 73 223 - 305"
                    />
                    <ContactInfo
                        icon={<EnvelopeAtFill />}
                        text="contact@codecraft.com"
                    />
                    <ContactInfo
                        icon={<GeoAltFill />}
                        text="1234 Main St. Anytown, USA 12345"
                    />
                </div>
                <div className="social_media">
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Link to='https://www.facebook.com/'>
                            <Facebook />
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Link to='https://twitter.com/'>
                            <Twitter />
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Link to='https://www.youtube.com/'>
                            <Youtube />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactFormContainer;