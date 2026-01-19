import React from "react";

const steps = [
  { title: "Explore", desc: "Browse demo sites on Xenbird.com" },
  { title: "Select", desc: "Choose the demo that fits your industry" },
  { title: "Customize", desc: "We tailor the code to your business" },
  { title: "Launch", desc: "Go live with a production-ready store" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-xenbird-primary mb-16">
          High-Level Workflow
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="text-center bg-white">
              <div className="w-24 h-24 mx-auto bg-xenbird-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-8 border-white shadow-lg">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;