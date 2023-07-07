import './index.css'

const ContactInfo = ({ icon, text }) => {
    return (
        <div className='contact_info'>
            <div className="icon_contact">
                {icon}
            </div>
            <p className='icon_label'>
                {text}
            </p>
        </div>
    )
}

export default ContactInfo;