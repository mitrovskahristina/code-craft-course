import {useContext} from 'react'
import CourseCardContainer from "./CourseCardContainer/index";
import "./index.css";
import Button from "../UI/Button/index";
import { Link } from "react-router-dom";
import { CourseContext } from '../../context/fetch-context';
import CourseItem from '../AvailableCourses/CourseItem';

const BrowseCourses = () => {
  const { courses } = useContext(CourseContext);

  const coursesList = courses.slice(0, 3).map((course) => (
    <CourseItem
      key={course.id}
      id={course.id}
      name={course.name}
      description={course.description}
      price={course.price}
      startingDate={course.startingDate}
      duration={course.duration}
      picture={course.picture}
      instructor={course.instructor}
      requiredKnowledge={course.requiredKnowledge}
      skillLevel={course.skillLevel}
      whatYouWillLearn={course.whatYouWillLearn}
      longDescription={course.longDescription}
      instructorRole={course.instructorRole}
      instructorPicture={course.instructorPicture}
    />
  ));
  return (
    <div className="browse_courses">
      <h2>Courses we offer</h2>
      <div className='offered-courses'>{coursesList}</div>
      <Link to="/courses">
        <Button>Browse All Courses</Button>
      </Link>
    </div>
  );
};

export default BrowseCourses;
