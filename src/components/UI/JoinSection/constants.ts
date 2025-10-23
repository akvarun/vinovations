import { StaticImageData } from 'next/image';
import gopala_vinjamuri from '../../../../public/images/vinjumuri_crop.png';
import bharathwaj_ramanathan from '../../../../public/images/bharath.png';
import varun_aiyaswamy from '../../../../public/images/varun.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "At Vinjamuri Innovations, our vision is to redefine high-pressure storage through decades of expertise and uncompromising safety. Every design we build combines science, experience, and precision engineering.",
    person: 'Dr. Gopala Krishna Vinjamuri – Founder & CEO',
    avatar: gopala_vinjamuri,
  },
  {
    testimony:
      "We’re bridging material science and data-driven design to build lightweight, durable composite systems that can handle the most demanding environments — from research labs to real-world applications.",
    person: 'Bharathwaj Ramanathan – Product & Strategy',
    avatar: bharathwaj_ramanathan,
  },
  {
    testimony:
      "Our goal is to bring cutting-edge engineering and digital innovation together — integrating software, analytics, and design workflows to accelerate technology adoption across industries.",
    person: 'Varun Aiyaswamy Kannan – Brand & Software Systems',
    avatar: varun_aiyaswamy,
  },
];

export const desktopHeaderPhrase = ['Meet the Minds Behind', 'Vinjamuri Innovations'];
