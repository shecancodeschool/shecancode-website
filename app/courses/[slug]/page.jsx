import React from 'react'
import CourseBanner from '../../../components/coursedetails/CourseBanner'
import CourseDetail from '../../../components/CourseDetails'
import coursesFakes from '../../../utils/coursesFakes';

const page = ({ params }) => {
  const { slug } = params;

  const course = coursesFakes.CoursesData.find((course) => course.slug === slug);

  return (
    <>
      <CourseBanner
        image={course.image}
        title={course.title}
        description={course.description}
        slug={course.slug}
        startDate={course.startDate}
        isOpen={course.isOpen}
      />
      <CourseDetail
        course={course}
      />
    </>
  )
}

export default page