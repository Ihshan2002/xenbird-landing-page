import React from "react";

const MissionValues = () => {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 block">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-xenbird-primary leading-tight">
            “Launch your custom-coded eCommerce site in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">days</span>.”
          </h2>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Xenbird removes uncertainty from eCommerce development by focusing on speed, clarity, and customization.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Experience First</h3>
            <p className="text-gray-600 text-sm">
              Experience real demo stores before committing. No guessing games.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Launch Faster</h3>
            <p className="text-gray-600 text-sm">
              Go to market with confidence in days instead of months.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Avoid Complexity</h3>
            <p className="text-gray-600 text-sm">
              Skip the technical headaches. We handle the code and infrastructure.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Production Ready</h3>
            <p className="text-gray-600 text-sm">
              Receive a personalized, fully functional site tailored to your brand.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionValues;