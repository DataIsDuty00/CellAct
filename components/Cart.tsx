import React from 'react';
import { X, Trash2, ArrowLeft } from 'lucide-react';

interface CartItem {
  productName: string;
  price: number;
}

interface CartProps {
  items: CartItem[];
  onRemove: (index: number) => void;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onClose, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
          <button 
            onClick={onClose}
            className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-brand-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </button>
          <h2 className="text-3xl font-heading text-brand-900">Your Selection</h2>
          <div className="w-24"></div> {/* Spacer for symmetry */}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 font-light mb-8">Your bag is currently empty.</p>
            <button 
              onClick={onClose}
              className="px-8 py-4 bg-brand-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-500 transition-colors"
            >
              Discover Collection
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-6 border-b border-gray-50 group">
                  <div className="flex flex-col">
                    <span className="text-brand-900 font-heading text-xl mb-1">{item.productName}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Medical Grade Formulation</span>
                  </div>
                  <div className="flex items-center space-x-8">
                    <span className="text-brand-900 font-medium">${item.price.toFixed(2)}</span>
                    <button 
                      onClick={() => onRemove(index)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 mt-12 border-t border-brand-900/10">
              <div className="flex justify-between items-end mb-10">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Subtotal</span>
                  <span className="text-sm text-gray-500 font-light italic">Complimentary shipping included</span>
                </div>
                <span className="text-4xl font-heading text-brand-900">${total.toFixed(2)}</span>
              </div>
              
              <button 
                onClick={onCheckout}
                className="w-full bg-brand-900 text-white py-6 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-500 transition-all duration-300 shadow-xl"
              >
                Proceed to Checkout
              </button>
              
              <p className="text-center mt-6 text-[9px] text-gray-400 uppercase tracking-widest font-medium">
                Secure SSL Encrypted Transaction
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;