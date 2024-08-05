import React from 'react';
import ReusableSection from '../../ReusableSection';

const PartnersSection = ({ parternerAndHiringCompanies }) => {
  return (
    <ReusableSection>
      <h2 className="section-header">Partners and Hiring Companies</h2>
      <p className='text-black text-xl text-center w-full md:w-3/4'>Our Career Day events and recruitment drives have helped over 85% of our core graduates find meaningful employment within 6-months post-graduation</p>
      <div className='flex justify-center items-center gap-16 flex-wrap mt-16'>
        {parternerAndHiringCompanies && parternerAndHiringCompanies.map((logo, index) => (
          <img key={index} src={`${logo.src}`} alt={logo.alt} className='md:w-fit max-h-12 md:max-h-20' />
        ))}
      </div>
    </ReusableSection>
  );
};

export default PartnersSection;
