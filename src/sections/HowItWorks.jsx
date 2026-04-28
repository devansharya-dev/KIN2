import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Request Samples",
      desc: "We ship a free starter pack to your establishment so your bar team can test the mixability and flavor profile firsthand.",
    },
    {
      id: "02",
      title: "Design Your Menu",
      desc: "Our mixologists collaborate with you to create custom KIN signature drinks that align with your brand's unique aesthetic.",
    },
    {
      id: "03",
      title: "Start Serving",
      desc: "Get ongoing B2B support, priority restocking, and flexible volume-based pricing designed for high-growth venues.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 1, 0.2, 1]
      }
    }
  };

  return (
    <section className="w-full bg-[var(--color-bg)] py-16 md:py-32 px-6 md:px-12 lg:px-20 font-body">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">The Process</span>
          <h2 className="text-[42px] md:text-[64px] font-extrabold tracking-[-0.05em] text-[#0C0C0C] font-heading lowercase">
            How we <span className="text-outline-dark italic">partner.</span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id} 
              variants={itemVariants}
              className="relative p-8 md:p-12 bg-black/[0.02] border border-black/5 rounded-[32px] hover:bg-black/[0.04] transition-all duration-500"
            >
              <span className="text-[12px] font-black text-[var(--color-primary)]/20 uppercase tracking-[0.4em] mb-8 block">Step {step.id}</span>
              <h3 className="text-[24px] md:text-[32px] font-extrabold tracking-tight text-black mb-4 font-heading lowercase">
                {step.title}
              </h3>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-black/50 font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
