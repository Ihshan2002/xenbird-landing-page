import React from "react";

const demos = [
  { category: "Fashion & Apparel", name: "StyleHub", color: "bg-pink-100 text-pink-700" },
  { category: "Electronics", name: "TechMart", color: "bg-blue-100 text-blue-700" },
  { category: "Beauty & Care", name: "GlowCare", color: "bg-purple-100 text-purple-700" },
  { category: "Health & Wellness", name: "WellNest", color: "bg-green-100 text-green-700" },
  { category: "Hardware", name: "BuildPro", color: "bg-orange-100 text-orange-700" },
  { category: "Home & Furniture", name: "CasaLiving", color: "bg-amber-100 text-amber-700" },
  { category: "Sports", name: "ActiveEdge", color: "bg-red-100 text-red-700" },
  { category: "Education", name: "Learnly", color: "bg-indigo-100 text-indigo-700" },
  { category: "Jewelry", name: "LuxeAura", color: "bg-yellow-100 text-yellow-700" },
  { category: "Toys & Kids", name: "PlayVille", color: "bg-cyan-100 text-cyan-700" },
  { category: "Automotive", name: "AutoZoneX", color: "bg-gray-200 text-gray-700" },
  { category: "Pet Supplies", name: "PawMart", color: "bg-teal-100 text-teal-700" },
];

const DemoShowcase = () => {
  return (
    <section id="demos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-xenbird-primary mb-4">
            Explore 12 Industry-Specific Demos
          </h2>
          <p className="text-gray-600">
            Don&apos;t guess. See exactly what your store will look like.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer text-center">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${demo.color}`}>
                {demo.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.name}</h3>
              <p className="text-sm text-gray-500 mb-4">Production Ready Template</p>
              <span className="text-xenbird-secondary text-sm font-medium group-hover:underline">
                View Demo &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;