import { testimonials } from '../data/siteData'

export default function TestimonialsMarquee() {
  const items = [...testimonials, ...testimonials]
  return (
    <section className="testimonials section-space" aria-labelledby="testimonials-heading">
      <div className="page-shell clients-heading">
        <h2 id="testimonials-heading">Client <em>Testimonials</em></h2>
        <p>Hear from the brands and organizations we've had the pleasure to work with.</p>
      </div>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {items.map((item, index) => (
            <div key={`${item.author}-${index}`} className="testimonial-card" aria-hidden={index >= testimonials.length}>
              <p>"{item.quote}"</p>
              <div>
                <h4>{item.author}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
