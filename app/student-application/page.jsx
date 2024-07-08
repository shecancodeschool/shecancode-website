import React from 'react'
import StudentApplicationForm from '@/components/StudentApplicationForm'
import StudentApplicationBanner from '@/components/StudentApplicationBanner'



const page = () => {
    return (
        <>
            <StudentApplicationBanner />
            <StudentApplicationForm />
        </>
    )
}

export default page