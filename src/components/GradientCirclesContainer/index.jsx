import GradientCircle from "./GradientCircle/index"
import './index.css'
import Computer from '../../assets/computer.png'

const GradientCirclesContainer = () => {
    return (
        <div className="circle_container">
            <div>
                <GradientCircle className="first_circle"/>
                <GradientCircle className="second_circle" />
                <GradientCircle className="third_circle" />
            </div>
            <img src={Computer} alt="3D computer" />
        </div>
    )
}

export default GradientCirclesContainer