import React from "react";

const WhyXenbird = () => {
  return (
    <section id="why-xenbird" className="py-24 bg-xenbird-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlike Shopify or WooCommerce
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Xenbird bridges the gap between fully custom development and ready-made platforms.
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-bold text-blue-300 mb-1">Demo-First Approach</h4>
                <p className="text-sm text-gray-300">Not generic templates. Real, working stores.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-bold text-blue-300 mb-1">Custom-Coded</h4>
                <p className="text-sm text-gray-300">Not a self-configured builder. We write the code.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-bold text-blue-300 mb-1">Zero Tech Debt</h4>
                <p className="text-sm text-gray-300">We handle the technical complexity. You just sell.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Abstract visual for code/tech */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-xenbird-secondary to-blue-900 opacity-50 border border-white/10 flex items-center justify-center">
              <span className="text-6xl font-mono text-white/20">{`</>`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyXenbird;