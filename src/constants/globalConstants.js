import SliderImageOne from "../assets/images/sliderImgs/slider1.jpg";
import SliderImageTwo from "../assets/images/sliderImgs/slider2.jpg";
import SliderImageThree from "../assets/images/sliderImgs/slider3.jpg";
import SliderImageFour from "../assets/images/sliderImgs/slider4.jpg";
import SliderImageFive from "../assets/images/sliderImgs/slider5.jpg";

import valueImgTablet1x from "../assets/images/valuesImage/maskGroup-tablet.jpg";
import valueImgTablet2x from "../assets/images/valuesImage/maskGroup-tablet@2x.jpg";
import valueImgTabletTwo1x from "../assets/images/valuesImage/maskGroupTwo-tablet.jpg";
import valueImgTabletTwo2x from "../assets/images/valuesImage/maskGroupTwo-tablet@2x.jpg";
import valueImgDesktop1x from "../assets/images/valuesImage/maskGroup-desktop.jpg";
import valueImgDesktop2x from "../assets/images/valuesImage/maskGroup-desktop@2x.jpg";
import valueImgDesktopTwo1x from "../assets/images/valuesImage/maskGroupTwo-desktop.jpg";
import valueImgDesktopTwo2x from "../assets/images/valuesImage/maskGroupTwo-desktop@2x.jpg";

export const POINTS_LIST = [
  { id: 1, value: "Main" },
  { id: 2, value: "About" },
  { id: 3, value: "Cases" },
  { id: 4, value: "FAQ" },
  { id: 5, value: "Contact Us" },
];

export const VALUES = [
  {
    id: 1,
    icon: "icon-maximize-circle",
    title: "Openness",
    text: "to the world, people, new ideas and projects",
  },
  {
    id: 2,
    icon: "icon-global-edit",
    title: "Responsibility",
    text: "we are aware that the results of our work have an impact on our lives and the lives of future generations",
  },
  {
    id: 3,
    type: "img",
    imageTabl1x: valueImgTablet1x,
    imageTabl2x: valueImgTablet2x,
    imageDesk1x: valueImgDesktop1x,
    imageDesk2x: valueImgDesktop2x,
  },
  {
    id: 4,
    type: "img",
    imageTabl1x: valueImgTabletTwo1x,
    imageTabl2x: valueImgTabletTwo2x,
    imageDesk1x: valueImgDesktopTwo1x,
    imageDesk2x: valueImgDesktopTwo2x,
  },
  {
    id: 5,
    icon: "icon-cpu-charge",
    title: "Innovation",
    text: "we use the latest technology to implement non-standard solutions",
  },
  {
    id: 6,
    icon: "icon-ranking",
    title: "Quality",
    text: "we do not strive to be the first among others, but we want to be the best in our business",
  },
];

export const SLIDER_LIST = [
  {
    id: 0,
    image: SliderImageOne,
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    text: "Wind Power for auto field irrigation",
    period: "July 2023",
  },
  {
    id: 1,
    image: SliderImageTwo,
    title: "Zhytomyr city Private Enterprise “Bosch”",
    text: "Solar Panels for industrial use",
    period: "November 2023",
  },
  {
    id: 2,
    image: SliderImageThree,
    title: "Rivne city Private Enterprise “Biotech”",
    text: "Thermal modules",
    period: "October 2023",
  },
  {
    id: 3,
    image: SliderImageFour,
    title: "Kherson city Private Enterprise “HealthyFarm”",
    text: "Wind power",
    period: "September 2021",
  },
  {
    id: 4,
    image: SliderImageFive,
    title: "Zaporizhia city Private Enterprise “Biotech”",
    text: "Mini nuclear stations",
    period: "May 2021",
  },
];

export const QUESTIONS = [
  {
    id: 0,
    question:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    id: 1,
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer:
      "Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions.",
  },
  {
    id: 2,
    question:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer:
      "Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future.",
  },
  {
    id: 3,
    question:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer:
      "EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact.",
  },
  {
    id: 4,
    question:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer:
      "EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all.",
  },
];
