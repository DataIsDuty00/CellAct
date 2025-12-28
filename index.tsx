import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Appointment from './components/Appointment';
import Technology from './components/Technology';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { AppView, Product } from './types';

const App = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [cartItems, setCartItems] = useState<{productName: string, price: number}[]>([]);

  // Sayfa değiştiğinde en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleAddToCart = (productName: string, price: number) => {
    setCartItems(prev => [...prev, { productName, price }]);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-500/20">
      <Navbar currentView={view} setView={setView} cartCount={cartItems.length} />
      
      <main className="fade-in">
        {view === AppView.HOME && (
          <>
            <Hero setView={setView} />
            <Features />
            <ProductList onAddToCart={handleAddToCart} />
          </>
        )}

        {view === AppView.PRODUCTS && (
          <div className="pt-20">
            <ProductList onAddToCart={handleAddToCart} />
          </div>
        )}

        {view === AppView.TECHNOLOGY && (
          <div className="pt-20">
            <Technology setView={setView} />
          </div>
        )}

        {view === AppView.APPOINTMENT && (
          <div className="pt-20">
            <Appointment />
          </div>
        )}

        {view === AppView.CART && (
          <div className="pt-20">
            <Cart 
              items={cartItems} 
              onRemove={handleRemoveFromCart} 
              onClose={() => setView(AppView.HOME)}
              onCheckout={() => {
                alert("Proceeding to secure checkout...");
                setCartItems([]);
                setView(AppView.HOME);
              }}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}