import './index.css'

const MentorNameTag = ({ name, className }) => {
    return (
        <h3 className={`name_tag ${className}`}>{name}</h3>
    )
}

export default MentorNameTag;