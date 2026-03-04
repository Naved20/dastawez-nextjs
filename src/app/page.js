import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import LogoSlider from '@/components/home/LogoSlider';
import WhyChoose from '@/components/home/WhyChoose';
import ServiceCard from '@/components/home/ServiceCard';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <ServiceCard />
      <LogoSlider />
      <WhyChoose />

    </div>
  );
}
