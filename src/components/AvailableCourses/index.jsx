import { useEffect, useState, useContext } from "react";

import "./index.css";
import CourseItem from "./CourseItem";
import NotFound from "../NotFound";
import { CourseContext } from "../../context/fetch-context";

const AvailableCourses = () => {
  const { courses } = useContext(CourseContext);

  const coursesList = courses.map((course) => (
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

  if (courses.length === 0) {
    return <NotFound />;
  }

  return <div className="available_courses">{coursesList}</div>;
};

export default AvailableCourses;
