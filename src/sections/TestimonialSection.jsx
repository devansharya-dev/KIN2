const testimonials = [
  {
    quote: "KIN completely changed our non-alc menu. Guests who used to just order water now have a go-to. Our bartenders love how fast it is to pour.",
    name: "Rahul M.",
    role: "Bar Manager",
    venue: "The Social, Delhi",
  },
  {
    quote: "The 1:3 ratio is genius — we adjusted it slightly for our signature cocktails and the flavor profile held up beautifully. Very versatile product.",
    name: "Priya K.",
    role: "Head Mixologist",
    venue: "Olive Bar & Kitchen",
  },
  {
    quote: "We ran a pilot with KIN for two weeks. Storage was a non-issue, margins were strong, and we got repeat orders from tables that tried it once.",
    name: "Arjun S.",
    role: "F&B Director",
    venue: "Boutique Hotel Group",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-16 md:py-32 px-6 md:px-12 lg:px-20 font-body overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">What Partners Say</span>
          <h2 className="font-heading text-[32px] md:text-[64px] lg:text-[80px] font-extrabold tracking-[-0.06em] lowercase">
            Trusted by <span className="text-outline-dark">venues.</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.name} 
              className="bg-[var(--color-surface)] rounded-[24px] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-lg"
            >
              {/* Quote */}
              <div>
                <div className="text-[var(--color-primary)] opacity-20 text-[48px] font-serif leading-none mb-4">"</div>
                <p className="text-[14px] md:text-[16px] leading-[1.7] text-black/60 font-medium">
                  {item.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-8 pt-6 border-t border-black/[0.06]">
                <p className="text-[14px] md:text-[16px] font-bold text-black/80">{item.name}</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/30 mt-1">{item.role}</p>
                <p className="text-[11px] text-[var(--color-primary)] uppercase tracking-[0.2em] mt-1 opacity-60">{item.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
