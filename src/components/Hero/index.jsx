import Button from "../UI/Button/index"
import './index.css'
import AbstractPendant from '../AbstractPendant'

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="hero_section">
            <div className="left_section">
                <h1>Master the skills of the digital age with our expert IT courses!</h1>
                <Link to='/courses'>
                    <Button>Start Your Journey Today</Button>
                </Link>
            </div>
            <div className="right_section">
                <Canvas className='canvas'>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[-2, 5, 2]} intensity={8} />
                    <directionalLight position={[2, -5, 2]} intensity={8} />
                    <AbstractPendant />
                </Canvas>

            </div>
        </div>
    )
}

export default Hero