import React from 'react';
import { AppView } from '../types';

interface TechProps {
    setView: (view: AppView) => void;
}

const Technology: React.FC<TechProps> = ({ setView }) => {
  return (
    <div className="bg-white">
      <div className="bg-brand-50 py-32 text-center px-4">
         <h2 className="text-brand-500 font-bold uppercase tracking-[0.2em] text-xs mb-6">Our Methodology</h2>
         <h1 className="text-4xl md:text-6xl font-heading text-brand-900 mb-8">Bio-Intelligent Skincare</h1>
         <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed">
            Data-driven dermatology. We utilize a proprietary scientific approach to construct your precise formula based on clinical evidence.
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
               {/* GÖRSEL: Grayscale kaldırıldı */}
               <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Laboratory" className="w-full transition-all duration-700" />
            </div>
            <div>
               <span className="text-brand-900 text-[10px] font-bold uppercase tracking-widest border-b border-brand-900 pb-2 mb-6 inline-block">01. Analysis</span>
               <h3 className="text-3xl font-heading text-brand-900 mb-6">Molecular Precision</h3>
               <p className="text-gray-500 mb-6 leading-relaxed font-light">
                  Every skin cell tells a story. Our in-clinic spectral analysis captures data invisible to the naked eye, including lipid barrier integrity and collagen density.
               </p>
               <p className="text-gray-500 leading-relaxed font-light">
                  This raw data is processed by our expert system, which cross-references your biological profile against thousands of active ingredient combinations.
               </p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="md:order-2 relative">
               <img src="https://i.ibb.co/QS5QPdQ/nstagram.jpg" alt="Microscope" className="w-full transition-all duration-700" />
            </div>
            <div className="md:order-1">
               <span className="text-brand-900 text-[10px] font-bold uppercase tracking-widest border-b border-brand-900 pb-2 mb-6 inline-block">02. Formulation</span>
               <h3 className="text-3xl font-heading text-brand-900 mb-6">Expert-Led Excellence</h3>
               <p className="text-gray-500 mb-8 leading-relaxed font-light">
                  Our lead dermatologists review every personalized recommendation before compounding begins. This ensures maximum safety while maintaining high potency of active ingredients.
               </p>
               <button onClick={() => setView(AppView.APPOINTMENT)} className="text-brand-900 uppercase font-bold tracking-widest text-xs hover:text-brand-500 transition-colors">
                  Start Your Journey &rarr;
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Technology;