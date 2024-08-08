import React from 'react'
import ReusableSection from '../../ReusableSection'
import CourseCard from '../../CourseCard'

const CoursesSection = ({ props }) => {
    const {homePageCoursesSectionData, courses } = props;
    return (
        <ReusableSection background={'#e6f2ff'}>
            <h2 className="section-header">{homePageCoursesSectionData.title}</h2>
            {courses && courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
        </ReusableSection>
    )
}

export default CoursesSection