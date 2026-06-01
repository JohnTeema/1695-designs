import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "1695 Designs delivered a headquarters that changed how our people work. The space has become part of our brand — every visitor mentions it. The process was rigorous, on-schedule, and exactly as presented.",
    author: "Adebayo Okafor",
    role: "CEO",
    company: "Meridian Group",
  },
  {
    quote:
      "The furniture they built for our hotel is unlike anything we could have sourced. It fits the rooms as if the rooms were built around the furniture — because they essentially were. Remarkable attention to detail.",
    author: "Fatima Al-Hassan",
    role: "General Manager",
    company: "The Annex Hotel",
  },
  {
    quote:
      "Working with 1695 Designs on our family home was one of the best decisions we've made. They listened carefully, challenged us where it mattered, and delivered a home that feels exactly like us — only better.",
    author: "Chidi & Ngozi Eze",
    role: "Private Clients",
    company: "Ikoyi Residence",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-warm-white">
      <Container>
        {/* Header */}
        <div className="max-w-xl mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            Testimonials
          </p>
          <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
            Clients who can speak for themselves.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 md:p-10 bg-stone/20 hover:bg-stone/40 transition-colors duration-400"
            >
              <div className="text-gold/50 font-heading text-6xl leading-none mb-6 select-none" aria-hidden="true">
                "
              </div>
              <blockquote className="font-body text-charcoal/80 leading-relaxed mb-8 text-[15px]">
                {t.quote}
              </blockquote>
              <div className="border-t border-stone pt-6">
                <p className="font-heading font-medium text-charcoal text-lg">
                  {t.author}
                </p>
                <p className="text-[11px] tracking-[0.1em] uppercase font-body text-grey mt-1">
                  {t.role} — {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
