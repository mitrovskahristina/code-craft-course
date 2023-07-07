import './index.css'
import ReviewPicture from "../ReviewPicture/index"

const ReviewCard = ({name, desctiption, image}) => {
    return (
        <div className="review_card">
            <ReviewPicture src={image} />
            <h3>{name}</h3>
            <p>{desctiption}</p>
        </div>
    )
}

export default ReviewCard