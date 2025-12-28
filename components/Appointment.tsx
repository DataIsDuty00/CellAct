import React, { useState } from 'react';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    clinic: 'central-lab'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-50 flex items-center justify-center p-4">
        <div className="bg-white p-12 max-w-lg w-full text-center shadow-xl border border-gray-100">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-heading text-brand-900 mb-4">Request Confirmed</h2>
          <p className="text-gray-500 mb-8 font-light">
            Thank you, {formData.name}. Our team will contact you shortly to finalize your appointment details.
          </p>
          <button onClick={() => window.location.reload()} className="text-brand-900 font-bold uppercase tracking-widest text-xs border-b border-brand-900 pb-1">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="bg-brand-50 p-12 lg:p-24 flex flex-col justify-center">
           <div className="max-w-md">
             <span className="text-brand-500 uppercase tracking-[0.2em] font-bold text-xs mb-6 block">The First Step</span>
             <h2 className="text-4xl lg:text-5xl font-heading text-brand-900 mb-8">Clinical Bio-Analysis</h2>
             <p className="text-gray-600 text-lg font-light mb-12 leading-relaxed">
               True personalization requires data. Our clinics are equipped with imaging technology to map your skin health at a cellular level.
             </p>
             
             <div className="space-y-10 border-t border-gray-200 pt-10">
               <div className="flex items-start">
                 <MapPin className="text-brand-900 w-6 h-6 mr-4 mt-1" />
                 <div>
                   <h4 className="font-bold text-brand-900 uppercase tracking-wider text-xs mb-2">Locations</h4>
                   <p className="text-gray-500 text-sm">New York • London • Paris • Istanbul</p>
                 </div>
               </div>
               
               <div className="flex items-start">
                 <Clock className="text-brand-900 w-6 h-6 mr-4 mt-1" />
                 <div>
                   <h4 className="font-bold text-brand-900 uppercase tracking-wider text-xs mb-2">Duration</h4>
                   <p className="text-gray-500 text-sm">30-Minute In-Depth Consultation</p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="p-12 lg:p-24 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-2xl font-heading text-brand-900 mb-8">Schedule Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full border-b py-3 outline-none focus:border-brand-900 text-sm"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full border-b py-3 outline-none focus:border-brand-900 text-sm"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <input
                required
                type="date"
                className="w-full border-b py-3 outline-none focus:border-brand-900 text-sm"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-900 text-white font-bold uppercase tracking-widest py-5 hover:bg-brand-500 transition-all duration-300 mt-8 text-xs"
              >
                {loading ? 'Processing...' : 'Confirm Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;