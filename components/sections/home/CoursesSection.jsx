import React from 'react'
import ReusableSection from '../../ReusableSection'

const CoursesSection = ({homePageCoursesSectionData, courses}) => {
    return (
        <ReusableSection background={'#e6f2ff'}>
            <h2 className="section-header">{homePageCoursesSectionData.title}</h2>
            
        </ReusableSection>
    )
}

export default CoursesSection