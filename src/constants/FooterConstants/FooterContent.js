import { Facebook, Twitter, Youtube } from 'react-bootstrap-icons'
import TermsAndConditions from '../../components/TermsAndConditions'

export const CONTACT = {
    address: "1234 Main St. Anytown, USA 12345",
    phoneNumber: "(+389)73 223 - 305",
    emailAddress: "contact@codecraft.com"
}

export const LEGAL_INFO = [
    {
        id: 1,
        name: "Terms and Conditions",
        onclick: <TermsAndConditions />
        //ovde neshto komponenta ili ne znam sho da ne zaborajsh :))
    },
    {
        id: 2,
        name: "Privacy Policy"
    }
]

export const SOCIAL_MEDIA = [
    {
        id: 1,
        name: "Facebook",
        icon: <Facebook />,
        link: "https://www.facebook.com/"
    },
    {
        id: 2,
        name: "Twitter",
        icon: <Twitter />,
        link: "https://www.twitter.com/"
    },
    {
        id: 3,
        name: "YouTube",
        icon: <Youtube />,
        link: "https://www.youtube.com/"
    }
]

/* !!IMPORTANT!!
    Ko ke importnuvash deka nema export default odish so konkretnoto ime
    t.e. import { SOCIAL_MEDIA } from 'FooterContent.js'
    ili eventualno as SocialMedia ili slichno
*/