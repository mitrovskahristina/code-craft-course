import { CONTACT } from '../../../constants/FooterConstants/FooterContent'

const FooterContact = ({title}) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {Object.keys(CONTACT).map((item, i) => (
                    <li key={i}>{CONTACT[item]}</li>
                ))}
            </ul>
        </div>
    )
}

export default FooterContact