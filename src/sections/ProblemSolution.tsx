import React from "react";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-xenbird-primary mb-4">
            The Problem Xenbird Solves
          </h2>
          <p className="text-lg text-gray-600">
            Why business owners struggle with traditional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Traditional Way */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-red-500">✕</span> Traditional Development
            </h3>
            <ul className="space-y-4">
              {["Long development timelines (Months)", "High upfront costs & risk", "Complex technical decisions", "Hard to visualize final product"].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Xenbird Way */}
          <div className="bg-xenbird-primary p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-xenbird-secondary/30 rounded-full blur-3xl -mr-10 -mt-10" />
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <span className="text-green-400">✓</span> The Xenbird Way
            </h3>
            <ul className="space-y-4 relative z-10">
              {[
                "Launch custom sites in days",
                "Experience working demos first",
                "No technical headaches",
                "Fixed pricing, production-ready code"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;