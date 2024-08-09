import mongoose from 'mongoose';


const HomePageDataSchema = new mongoose.Schema({
  bannerData: {
    title: { type: String, required: true, trim: true },
    backgroundImage: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    buttonOne: {
      label: { type: String, required: true, trim: true },
      location: { type: String, required: true, trim: true }
    },
    buttonTwo: {
      label: { type: String, required: true, trim: true },
      location: { type: String, required: true, trim: true }
    },
    courseAdvertTitle: { type: String, required: true, trim: true }
  },
  slogansData: [
    {
      title: { type: String, required: true, trim: true },
      icon: { type: String, required: true, trim: true }
    }
  ],
  sloganDescriptionData: {
    image: {
      source: { type: String, required: true, trim: true },
      alt: { type: String, required: true, trim: true }
    },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    button: {
      label: { type: String, required: true, trim: true },
      location: { type: String, required: true, trim: true }
    }
  },
  homePageCoursesSectionData: {
    title: { type: String, required: true, trim: true }
  },
  partnersAndHiringCompaniesSectionData: {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    companies: [
      {
        src: { type: String, required: true, trim: true },
        alt: { type: String, required: true, trim: true }
      }
    ]
  },
  statistics: [
    {
      icon: { type: String, required: true, trim: true },
      title: { type: String, required: true, trim: true },
      number: { type: Number, required: true },
      sign: { type: String, required: true, trim: true }
    }
  ],
  statisticsSectionData: {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  servicesSectionData: {
    sectionTitle: { type: String, required: true, trim: true },
    imageOne: { type: String, required: true, trim: true },
    imageTwo: { type: String, required: true, trim: true },
    items: [
      {
        icon: { type: String, required: true, trim: true },
        text: { type: String, required: true, trim: true }
      }
    ]
  },
  reviewsSectionData: {
    title: { type: String, required: true, trim: true },
    subTitle: { type: String, required: true, trim: true },
    reviews: [
      {
        name: { type: String, required: true, trim: true },
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        image: { type: String, required: true, trim: true }
      }
    ]
  },
  faqsSectionData: {
    title: { type: String, required: true, trim: true },
    background: { type: String, required: true, trim: true },
    faqs: [
      {
        question: { type: String, required: true, trim: true },
        answer: { type: String, required: true, trim: true }
      }
    ]
  }
});

const HomePageData = mongoose.models.HomePageData || mongoose.model('HomePageData', HomePageDataSchema);
export default HomePageData;
