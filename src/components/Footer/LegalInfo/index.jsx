import { LEGAL_INFO } from "../../../constants/FooterConstants/FooterContent"

const LegalInfo = ({ title }) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {LEGAL_INFO.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default LegalInfo