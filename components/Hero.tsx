import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { AppView } from '../types';

interface HeroProps {
  setView: (view: AppView) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative bg-brand-50 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-brand-50 h-1/2 lg:h-full"></div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
           {/* GÖRSEL: Grayscale kaldırıldı, daha canlı görünüyor */}
           <img
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            src="https://i.ibb.co/PZGV2xR0/Whats-App-mage-2025-12-29-at-00-51-11.jpg"
            alt="Clinical skincare"
          />
          <div className="absolute inset-0 bg-white/5"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="lg:w-1/2 pt-12 lg:pt-0 pr-0 lg:pr-16">
          <span className="block text-brand-500 text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Clinical Precision
          </span>
          
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-brand-900 leading-[1.1] mb-8">
            The Future of <br/>
            <span className="italic font-normal">Personalized</span> Dermatology
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 font-light max-w-md leading-relaxed mb-10">
            CellAct bridges the gap between luxury skincare and medical science. Experience formulations compounded specifically for your unique skin profile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setView(AppView.APPOINTMENT)}
              className="px-8 py-4 bg-brand-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-500 transition-colors duration-300 flex items-center justify-center"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => setView(AppView.PRODUCTS)}
              className="px-8 py-4 border border-brand-900 text-brand-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-900 hover:text-white transition-colors duration-300"
            >
              Shop Collection
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce">
         <ArrowDown className="text-gray-400 w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;