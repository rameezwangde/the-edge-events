import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import HeroSection from '../components/HeroSection'
import BrandIntroduction from '../components/BrandIntroduction'
import HorizontalServices from '../components/HorizontalServices'
import EventShowcase from '../components/EventShowcase'
import ExperienceStatement from '../components/ExperienceStatement'
import WhyChooseUs from '../components/WhyChooseUs'
import ClientsMarquee from '../components/ClientsMarquee'
import TalentsPartners from '../components/TalentsPartners'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const schema = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'The Edge Events',
  url: 'https://theedgeevents.co/', telephone: '+971505035848',
  description: 'Professional event management, corporate event production and premium experiences across Dubai and the UAE.',
  address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
}

export default function HomePage() {
  return <>
    <Helmet>
      <title>The Edge Events | Professional Event Management Company in UAE</title>
      <meta name="description" content="The Edge Events delivers creative corporate events, brand activations, conferences and premium experiences across Dubai and the UAE." />
      <link rel="canonical" href="https://theedgeevents.co/" />
      <meta property="og:title" content="The Edge Events | Professional Event Management Company in UAE" />
      <meta property="og:description" content="Creative event direction, production and premium experiences across Dubai and the UAE." />
      <meta property="og:type" content="website" /><meta property="og:url" content="https://theedgeevents.co/" /><meta property="og:image" content="https://theedgeevents.co/assets/img/homeimg/banneredge1.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <ScrollProgress />
    <Navbar />
    <main className="overflow-x-hidden w-full max-w-full"><HeroSection /><BrandIntroduction /><HorizontalServices /><EventShowcase /><ExperienceStatement /><WhyChooseUs /><ClientsMarquee /><TalentsPartners /><FinalCTA /></main>
    <Footer /><WhatsAppButton />
  </>
}
