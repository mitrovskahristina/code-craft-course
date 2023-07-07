import { Link } from "react-router-dom"
import { SOCIAL_MEDIA } from "../../../constants/FooterConstants/FooterContent"

import '../index.css'

const SocialMedia = ({title}) => {
    return (
        <div className="social_media_items">
            <h3>{title}</h3>
            <ul>
                {SOCIAL_MEDIA.map((item, i) => (
                    <Link to={item.link} key={i}>
                        <li key={i}>{item.icon} {item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default SocialMedia