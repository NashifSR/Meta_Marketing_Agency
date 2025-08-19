// app/page.jsx
import Link from 'next/link';
import theme from '../theme'; // adjust if needed
import HeroSection from './Components/HomeComponents/HeroSection';
import Services from './Components/HomeComponents/Services';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center px-2 py-2 mx-auto">
      <HeroSection></HeroSection>
      <Services></Services>
    </main>
  );
};

export default Home;
