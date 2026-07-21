import { Calendar, Users, MapPin, Handshake, ArrowUpLeft } from 'lucide-react'

const strengths = [
  { value: '10+', label: 'Years of Experience', icon: Calendar },
  { value: '01', label: 'Dedicated Point of Contact', icon: Users },
  { value: '360°', label: 'End-to-End Event Delivery', icon: MapPin },
  { value: 'UAE', label: 'Trusted Partner Network', icon: Handshake },
]

export default function WhyChooseUs() {
  return (
    <section className="why section-space" aria-labelledby="why-heading">
      <div className="page-shell why-split">
        <div className="why-left">
          <div className="why-eyebrow-wrap">
            <span className="eyebrow-line"></span>
            <p className="eyebrow">MADE IN THE UAE</p>
            <span className="eyebrow-line right"></span>
            <span className="eyebrow-corner"></span>
          </div>
          
          <h2 id="why-heading">Why Brands<br/>Choose <em>The Edge</em></h2>
          <div className="why-title-line"></div>
          
          <p className="why-desc">
            The Edge Events brings more than a decade of professional expertise and a trusted network to deliver complete, end-to-end event services across the UAE.
            <br/><br/>
            We combine creative thinking, transparent coordination and precise execution.
          </p>
          
          <div className="why-quote">
            <ArrowUpLeft size={24} className="quote-arrow" />
            <div className="quote-text-wrap">
              <p>Try us once, and <em>you'll know.</em></p>
              <svg className="quote-underline" viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M0,15 Q100,0 200,10" fill="none" stroke="#00b7d7" strokeWidth="2.5" strokeLinecap="round" /></svg>
            </div>
          </div>
        </div>

        <div className="why-center">
          <svg className="why-ripples" viewBox="0 0 200 600" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="300" r="50" fill="none" stroke="#00b7d7" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="200" cy="300" r="100" fill="none" stroke="#00b7d7" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="200" cy="300" r="150" fill="none" stroke="#00b7d7" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="200" cy="300" r="200" fill="none" stroke="#00b7d7" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="200" cy="300" r="250" fill="none" stroke="#00b7d7" strokeWidth="1" strokeOpacity="0.1" />
          </svg>
          <div className="why-center-line">
            <div className="why-center-dot"></div>
          </div>
        </div>

        <div className="why-right">
          <div className="strengths-grid">
            {strengths.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="strength-card">
                  <div className="strength-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <div className="strength-line"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
