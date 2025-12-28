import React from 'react';
import { Truck, Leaf, ShieldCheck, Activity } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Bio-Metric Analysis',
      description: 'Clinic-grade diagnostic technology mapping 50+ skin markers.',
      icon: Activity,
    },
    {
      name: 'PETA Certified',
      description: '100% Vegan & Cruelty-Free ethical formulations.',
      icon: Leaf,
    },
    {
      name: 'Medical Grade',
      description: 'Active ingredients at prescription-strength efficacy levels.',
      icon: ShieldCheck,
    },
    {
      name: 'Fast Dispatch',
      description: 'Freshly compounded and shipped within 48 hours.',
      icon: Truck,
    },
  ];

  return (
    <div className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full border border-gray-100">
                <feature.icon strokeWidth={1} className="h-8 w-8 text-brand-900" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-900 mb-2">{feature.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;