export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Talents & Partners', to: '/talents-partners' },
  { label: 'Contact Us', to: '/contact' },
]

export const services = [
  {
    number: '01',
    title: 'Edge Engagements',
    descriptor: 'Corporate events',
    copy: 'Corporate events, employee experiences, conferences, celebrations and meaningful brand gatherings — conceived with purpose and delivered without friction.',
    image: '/images/service-engagements-new.png',
  },
  {
    number: '02',
    title: 'Edge Exclusive',
    descriptor: 'Social celebrations',
    copy: 'Premium private events, bespoke experiences and carefully curated occasions that feel unmistakably personal.',
    image: '/images/service-exclusive-new.png',
  },
  {
    number: '03',
    title: 'Edge Exploration',
    descriptor: 'Travel & expeditions',
    copy: 'Destination experiences, outdoor programmes, team adventures and cultural journeys across the UAE and beyond.',
    image: '/images/service-exploration-new.png',
  },
]

export const projects = [
  { title: 'Family Day', category: 'Family Experiences', year: '2025', location: 'Dubai, UAE', image: '/images/showcase-1.jpg' },
  { title: 'Corporate Conference', category: 'Conferences', year: '2025', location: 'Abu Dhabi, UAE', image: '/images/showcase-2.jpg' },
  { title: 'Team in Motion', category: 'Employee Engagement', year: '2024', location: 'Ras Al Khaimah, UAE', image: '/images/showcase-3.jpg' },
  { title: 'The Gala Edit', category: 'Corporate Events', year: '2024', location: 'Dubai, UAE', image: '/images/showcase-4.jpg' },
  { title: 'Voices on Stage', category: 'Live Experiences', year: '2024', location: 'Dubai, UAE', image: '/images/showcase-5.jpg' },
  { title: 'Beyond the City', category: 'Outdoor Events', year: '2023', location: 'UAE', image: '/images/showcase-6.jpg' },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/theedgeevents/' },
  { label: 'Facebook', href: 'https://www.facebook.com/theedgeevents/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/the-edge-events/' },
]

export const clientLogos = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/client-${index + 1}.png`,
  alt: `The Edge Events client ${index + 1}`,
}))
