import ContactBanner from '../../components/ContactBanner'
import ContactForm from '../../components/ContactForm'
import React from 'react'

function page() {
  return (
    <>
      <div className='bg-[#FAFAFA]'>
        <ContactBanner />
        <ContactForm />
      </div>
    </>
  )
}

export default page