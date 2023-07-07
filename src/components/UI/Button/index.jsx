import { Button as BootstrapButton } from "react-bootstrap";
import './index.css'

const Button = ({children, onClick, className, type}) => {
    return (
        <BootstrapButton className={`primary_button ${className}`} onClick={onClick} type={type}>{children}</BootstrapButton>
    )
}

export default Button