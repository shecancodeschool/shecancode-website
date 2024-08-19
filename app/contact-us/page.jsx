import ContactBanner from '../../components/ContactBanner'
import ContactForm from '../../components/ContactForm'
import React from 'react'
import DefaultPageBanner from '../../components/DefaultPageBanner'
import PageTitle from '../../components/PageTitle'

function page() {
  return (
    <>
        <DefaultPageBanner 
          backgroundImage="banner_img.png"
          title="Contact Us"
          description="Leave here your feedback and let’s us know what do you think about us"
        />
        <div>
          <PageTitle orientation={"center"} title={"Tell us what you need!"} />
          <ContactForm />
        </div>
    </>
  )
}

export default page