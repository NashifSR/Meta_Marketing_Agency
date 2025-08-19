// app/page.jsx
import Link from 'next/link';
import theme from '../theme'; // adjust if needed
import HeroSection from './Components/HomeComponents/HeroSection';
import Services from './Components/HomeComponents/Services';
import Pricing from './Components/HomeComponents/Pricing';
import CaseStudies from './Components/HomeComponents/CaseStudies';
import WorkProcess from './Components/HomeComponents/WorkProcess';
import Testimonials from './Components/HomeComponents/Testimonials';
import Team from './Components/HomeComponents/Team';
import FAQ from './Components/HomeComponents/FAQ';
import CTA from './Components/HomeComponents/CTA';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center px-2 py-2 mx-auto">
      <HeroSection></HeroSection>
      <Services></Services>
      <WorkProcess></WorkProcess>
      <CaseStudies></CaseStudies>
      <Testimonials></Testimonials>
      <Team></Team>
      <Pricing></Pricing>
      <FAQ></FAQ>
      <CTA></CTA>
    </main>
  );
};

export default Home;
