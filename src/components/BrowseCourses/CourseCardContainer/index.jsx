import CourseCard from "../CourseCard/index"
import './index.css'

const CourseCardContainer = () => {
    return (
        <div className="card_container">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    )
}

export default CourseCardContainer