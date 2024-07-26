import React from 'react'
import Jobs from '../../../components/JobList'
import DashboardLayout from "../../../components/DashboardLayout"

function page() {
  return (
    <>

      <DashboardLayout>
        <Jobs />
      </DashboardLayout>
    </>
  )
}

export default page