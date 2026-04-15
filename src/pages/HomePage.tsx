import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import HomeIntroBand from '@/components/sections/HomeIntroBand';
import HomeDestinationsGrid from '@/components/sections/HomeDestinationsGrid';
import HomeClosingBand from '@/components/sections/HomeClosingBand';
import {
  heroData,
  homeEditorial,
  siteDestinations,
  contactBlockData,
} from '@/content/home';
import { seoData } from '@/content/seo';

export default function HomePage() {
  const seo = seoData['/'];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      <HeroSection data={heroData} large />
      <HomeIntroBand {...homeEditorial} />
      <HomeDestinationsGrid destinations={siteDestinations} id="razdeli" />
      <HomeClosingBand title={contactBlockData.title} subtitle={contactBlockData.subtitle} />
    </>
  );
}
