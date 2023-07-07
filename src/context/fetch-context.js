// CourseContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://code-craft-course-default-rtdb.europe-west1.firebasedatabase.app/courses.json');

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const responseData = await response.json();

        const loadedCourses = Object.keys(responseData).map((key) => ({
          id: key,
          name: responseData[key].courseName,
          description: responseData[key].description,
          price: responseData[key].price,
          startingDate: responseData[key].startingDate,
          duration: responseData[key].duration,
          picture: responseData[key].picture,
          instructor: responseData[key].instructor,
          requiredKnowledge: responseData[key].requiredKnowledge,
          skillLevel: responseData[key].skillLevel,
          whatYouWillLearn: responseData[key].whatYouWillLearn,
          longDescription: responseData[key].longDescription,
          instructorRole: responseData[key].instructorRole,
          instructorPicture: responseData[key].instructorPicture,
        }));

        setCourses(loadedCourses);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, isLoading, httpError }}>
      {children}
    </CourseContext.Provider>
  );
};
