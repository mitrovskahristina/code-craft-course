import { motion } from "framer-motion"

import './index.css'

const ReviewPicture = ({src}) => {
    return (
        <motion.img src={src} className="review_picture">
        </motion.img>
    )
}

export default ReviewPicture