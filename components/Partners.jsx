import Image from 'next/image';

const logos = [
  { src: '/IRO.png', alt: 'IRO logo' },
  { src: '/mastercard.png', alt: 'Mastercard foundation logo' },
  { src: '/Klab2.png', alt: 'Klab logo' },
  { src: '/umurava2.png', alt: 'Umurava logo' },
  { src: '/iremboGov.PNG', alt: 'Irembo logo' },
];

const PartnersSection = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl text-[#000000] text-50px font-semibold font mb-20">Our Partners</h2>
      <div className="overflow-hidden pl-10 relative">
        <div className="flex animate-marquee space-x-28 w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-28">
              {logos.map((logo, index) => (
                <Image key={index} src={logo.src} alt={logo.alt} width={120} height={50} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
