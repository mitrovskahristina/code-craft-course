import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

import QuestionsAccordion from './QuestionsAccordion/index'
import QuestionMark from './QuestionMark/index'
import './index.css'

const FrequentlyAskedQuestions = () => {
    return (
        <div className='faq'>
            <h2>Frequently Asked Questions</h2>
            <div className='faq_container'>
                <QuestionsAccordion className="accordion_container" />
                <motion.div animate={{
                    y: [-10, 10, 10, -10],
                    transition: {
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    },
                }}>
                    <Canvas className='canvas_faq'>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                        <QuestionMark />
                    </Canvas>
                </motion.div>
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions