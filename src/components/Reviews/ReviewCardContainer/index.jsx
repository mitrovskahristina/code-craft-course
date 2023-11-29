import ReviewCard from "../ReviewCard/index"
import './index.css'

import Person1 from '../../../assets/person04.jpg'
import Person2 from '../../../assets/person05.jpg'
import Person3 from '../../../assets/person06.jpg'



const ReviewCardContainer = () => {
    return (
        <div className="review_card_container">
            <ReviewCard 
                name="Jane Doe"
                image={Person1}
                desctiption="I was looking for a way to enhance my skills in programming and web development. 
                Code Craft's courses were perfect for me. The instructors were knowledgeable and supportive, 
                and the hands-on projects gave me the practical experience I needed to apply what I learned. 
                I highly recommend Code Craft to anyone looking to improve their IT skills."
            />
            <ReviewCard 
                name="Paul Gramsch"
                image={Person2}
                desctiption="I was hesitant to take an online course, but Code Craft exceeded my expectations. 
                The courses were engaging and interactive, and the instructors were always available to answer questions and provide guidance. 
                The best part? I was able to learn at my own pace, which made balancing work and education much easier."
            />
            <ReviewCard 
                name="Samantha Smith"
                image={Person3}
                desctiption="I recently completed Code Craft's data science course and I have to say it was one of the best 
                educational experiences I've had.  By the end of the course, I felt confident in my ability to apply my skills to real-world 
                problems. I would highly recommend Code Craft's data science course to anyone looking to break into this exciting field."
            />
        </div>
    )
}

export default ReviewCardContainer