const strengths = [
  ['10+', 'Years of Experience'],
  ['01', 'Dedicated Point of Contact'],
  ['360°', 'End-to-End Event Delivery'],
  ['UAE', 'Trusted Partner Network'],
]

export default function WhyChooseUs() {
  return (
    <section className="why section-space" aria-labelledby="why-heading">
      <div className="why-bg"><img src="/images/dubai.png" alt="Dubai city and UAE event production context" width="1800" height="1000" loading="lazy" /></div>
      <div className="page-shell why-content">
        <div className="why-copy"><p className="eyebrow">Made in the UAE</p><h2 id="why-heading">Why Brands Choose <em>The Edge</em></h2><p>The Edge Events brings more than a decade of professional expertise and a trusted network to deliver complete, end-to-end event services across the UAE. We combine creative thinking, transparent coordination and precise execution.</p></div>
        <div className="strengths">{strengths.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        <p className="why-signoff">Try us once, and you’ll know.<span /></p>
      </div>
    </section>
  )
}
