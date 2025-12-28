import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ view, label }: { view: AppView; label: string }) => (
    <button
      onClick={() => {
        setView(view);
        setIsOpen(false);
      }}
      className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
        currentView === view
          ? 'text-brand-900 border-b border-brand-900'
          : 'text-gray-500 hover:text-brand-500'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setView(AppView.HOME)}>
            <span className="font-heading font-medium text-4xl tracking-tight text-brand-900">
              Cell<span className="text-brand-500">Act</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLink view={AppView.HOME} label="Home" />
            <NavLink view={AppView.PRODUCTS} label="Collection" />
            <NavLink view={AppView.TECHNOLOGY} label="Science" />
            <button
              onClick={() => setView(AppView.APPOINTMENT)}
              className="bg-brand-900 text-white px-6 py-3 rounded-none uppercase tracking-widest text-[10px] font-semibold hover:bg-brand-500 transition-colors duration-300"
            >
              Book Appointment
            </button>
            <div 
              className="relative cursor-pointer group p-2"
              onClick={() => setView(AppView.CART)}
            >
              <ShoppingBag className="h-5 w-5 text-gray-400 group-hover:text-brand-900 transition" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-500 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
             <div 
              className="relative cursor-pointer p-2"
              onClick={() => setView(AppView.CART)}
            >
              <ShoppingBag className="h-6 w-6 text-brand-900" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-500 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-900 hover:text-brand-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-8 pt-6 pb-8 space-y-6 flex flex-col items-start">
            <NavLink view={AppView.HOME} label="Home" />
            <NavLink view={AppView.PRODUCTS} label="Collection" />
            <NavLink view={AppView.TECHNOLOGY} label="Science" />
            <button
              onClick={() => {
                setView(AppView.APPOINTMENT);
                setIsOpen(false);
              }}
              className="w-full text-center px-4 py-4 bg-brand-900 text-white font-bold uppercase tracking-widest text-xs"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;