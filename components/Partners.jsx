import Image from 'next/image';

const logos = [
  { src: '/IRO.png', alt: 'IRO logo' },
  { src: '/mastercard.png', alt: 'Mastercard foundation logo' },
  { src: '/Klab2.png', alt: 'Klab logo' },
  { src: '/umurava2.png', alt: 'Umurava logo' },
  { src: '/iremboGov.PNG', alt: 'Irembo logo' },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const PartnersSection = () => {
  return (
    <div className=" px-4 md:px-14 md:py-3 py-1 md:mt-24 mt-8 md:my-16 mb-7 md:text-center ">
      <h2 className="md:text-[50px] text-[#0B2B4E] text-3xl  font-semibold font md:mt-16">Our Partners</h2>
      <div className=" pl-10 mt-32 ">
        <div className="flex animate-marquee space-x-28 w-max">
          {[...Array(logos.length)].map((_, i) => (
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
