import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import HomeIntroBand from '@/components/sections/HomeIntroBand';
import HomeDestinationsGrid from '@/components/sections/HomeDestinationsGrid';
import HomeClosingBand from '@/components/sections/HomeClosingBand';
import HomeExpertBlock from '@/components/sections/HomeExpertBlock';
import HomeOutcomeCards from '@/components/sections/HomeOutcomeCards';
import HomeBoundaries from '@/components/sections/HomeBoundaries';
import HomeFitBlock from '@/components/sections/HomeFitBlock';
import HomeDirectionsBlock from '@/components/sections/HomeDirectionsBlock';
import HomeTestimonialsPreview from '@/components/sections/HomeTestimonialsPreview';
import {
  heroData,
  homeEditorial,
  siteDestinations,
  homeExpertBlock,
  homeOutcomeCards,
  homeBoundaries,
  homeFit,
  homeDirections,
  homeTestimonialsPreview,
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
      <HomeExpertBlock {...homeExpertBlock} />
      <HomeOutcomeCards items={homeOutcomeCards} />
      <HomeBoundaries {...homeBoundaries} />
      <HomeFitBlock {...homeFit} />
      <HomeDirectionsBlock {...homeDirections} />
      <HomeDestinationsGrid destinations={siteDestinations} id="razdeli" />
      <HomeTestimonialsPreview {...homeTestimonialsPreview} />
      <HomeClosingBand title={contactBlockData.title} subtitle={contactBlockData.subtitle} />
    </>
  );
}
