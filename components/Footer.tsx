import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1">
             <span className="font-heading font-medium text-3xl tracking-tight text-white block mb-8">
              Cell<span className="text-brand-500">Act</span>
            </span>
            <p className="text-gray-400 text-[10px] leading-relaxed max-w-xs uppercase tracking-wider">
              Pioneering the intersection of dermatological science and modern aesthetics.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-6">Explore</h3>
            <ul className="space-y-4 text-gray-400 text-[10px] uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-6">Legal</h3>
            <ul className="space-y-4 text-gray-400 text-[10px] uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ethics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-[10px] uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
          <p>&copy; 2024 CellAct. All rights reserved.</p>
          <p>Designed for the Modern Skin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;