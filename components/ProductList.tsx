import React from 'react';
import { Product } from '../types';
import { Plus, ShoppingCart } from 'lucide-react';

const products: Product[] = [
  {
    id: '1',
    name: 'The Resilience Architect',
    price: 280.00,
    description: 'Şahmeran | Barrier Defence & Stabilization.',
    story: 'Designed to support the proper and balanced functioning of the skin barrier. It supports the natural barrier structure, composed of ceramides, cholesterol, and lipids, through a biomimetic approach; reducing water loss and providing a stable barrier environment against environmental stressors. \n\nThe formula draws inspiration from the wise and protective approach of the Shahmaran character. Olive leaf exosome, representing the principle of balance and resilience that has allowed the olive tree to endure for centuries, silently contributes to the protection of the barrier.',
    ingredients: ['Ceramide NP / AP / EOP', 'Cholesterol (plant-derived / bio-identical)', 'Squalane (plant-derived)', 'Olea Europaea Leaf Exosome'],
    image: 'https://i.ibb.co/Y4SMKwyG/Whats-App-mage-2025-12-28-at-01-26-18.jpg',
    category: 'Custom',
    isVegan: true,
    tags: ['Barrier Repair', 'Stabilization']
  },
  {
    id: '2',
    name: 'Skin Renewal',
    price: 430.00,
    description: 'Age Reset & Skin Renewal Cream',
    story: 'Designed to support the skin’s natural renewal process in a controlled and balanced way. By working in harmony with the skin’s own biological rhythm, it helps initiate renewal at a cellular level while preserving structural integrity. The formula focuses on long-term skin strength rather than instant effects, allowing renewal to progress without overwhelming the skin. \n\nThe formula is inspired by the Al Karısı archetype, reinterpreted as a symbol of gradual and profound transformation. Much like renewal that unfolds over time rather than all at once, grape exosome was selected to support the preservation of skin structure during the renewal process. This quiet yet effective approach reflects the idea that true change is subtle, layered, and enduring.',
    ingredients: ['Peptide Complex', 'Ceramide', 'Hyaluronic Acid', 'Bakuchiol', 'Retinol'],
    image: 'https://i.ibb.co/pB7dB9PT/Whats-App-mage-2025-12-28-at-02-10-11.jpg',
    category: 'Custom',
    isVegan: true,
    tags: ['Anti-Aging', 'Firming', 'Anti Wrinkle']
  },
  {
    id: '3',
    name: 'Eternal Youth Concentate',
    price: 255.00,
    description: 'Repair & Regeneration Cream',
    story: 'Designed to support the skin’s natural repair and regeneration processes by reinforcing its ability to restore balance after stress, disruption, or imbalance. Rather than forcing change, it works in harmony with the skin’s own rhythm, helping it regain stability, resilience, and a sense of continuity. \n\n The formula is inspired by Umay Ana, the ancient protector associated with healing, renewal, and quiet strength. At its heart lies the rose — a symbol of remembrance and restoration. Drawn from the enduring legacy of Isparta roses, this inspiration reflects a form of regeneration that is patient, protective, and deeply rooted in nature’s wisdom. ',
    ingredients: ['Retinol', 'Plant-Derived Rose Exosome', 'Grape Extract'],
    image: 'https://i.ibb.co/RVx8FnX/Whats-App-mage-2025-12-28-at-01-55-02.jpg',
    category: 'Custom',
    isVegan: true,
    tags: ['Repair', 'Regeneration', 'Endurance']
  },
  {
    id: '4',
    name: 'The Age Eraser',
    price: 220.00,
    description: 'Acne & Inflammation Control Cream',
    story: 'Designed to calm and clarify the skin by supporting balanced sebum regulation and helping reduce inflammation without disrupting the skin’s natural systems. The formula promotes a stable, comfortable skin environment, allowing clarity to develop gradually rather than through aggressive correction. \n\nInspired by the concept of Yer Ana, a symbol of balance and restoration, the formula reflects a calm and grounding approach to skin care. Selected botanical actives support this philosophy by helping the skin regain clarity through balance, not force.',
    ingredients: ['Stem Cell Extract', 'Ceramide NP', 'Salicylic Acid','Potassium Azeloyl Diglycinate','Prebiotic Complex','Chamomilla Recutita Flower Exosome'],
    image: 'https://i.ibb.co/Zp70ktcz/Gemini-Generated-mage-82ieh482ieh482ie.png',
    category: 'Custom',
    isVegan: true,
    tags: ['Purifying', 'Clarifying']
  },
  {
    id: '5',
    name: 'Pure Radiance',
    price: 340.00,
    description: 'Tone & Radiance Optimization Cream',
    story: 'Designed to support balanced and harmonious skin tone by working with the skin’s natural radiance mechanisms. The formula focuses on long-term tone optimization rather than rapid brightening, helping the skin appear clearer, more even, and naturally luminous without disrupting its equilibrium. \n\nThe formula draws inspiration from Sirius as a symbol of balance and continuity. Reflecting this approach, the formulation supports the skin’s own regulatory processes instead of forcing visible change. Pomegranate exosome, representing renewal and clarity, quietly contributes to sustained tone harmony and refined radiance.',
    ingredients: ['Niacinamide', 'N-Acetyl Glucosamine (NAG)', 'Alpha Arbutin','Licorice Root Extract', 'Pomegranate Exosome', 'Ectoin'],
    image: 'https://i.ibb.co/Ng9wLBrW/Gemini-Generated-mage-md480lmd480lmd48.png',
    category: 'Custom',
    isVegan: true,
    tags: ['Radiance', 'Tone Harmony']
  }
];

interface ProductListProps {
  onAddToCart: (productName: string, price: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px]">Formulated by Specialists</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-heading text-brand-900">Essentials Collection</h2>
        </div>

        <div className="space-y-40">
          {products.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden group shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.isVegan && (
                     <div className="absolute top-6 left-6 border border-brand-900 text-brand-900 px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-white/80 backdrop-blur-sm">
                        Vegan
                     </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2 px-4 lg:px-12">
                <div className="flex items-center space-x-3 mb-8">
                   <span className="h-px w-8 bg-brand-500"></span>
                   <span className="uppercase tracking-[0.2em] text-xs text-brand-500">{product.category}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-heading text-brand-900 mb-4 leading-tight">{product.name}</h3>
                
                {/* Minimalist Tags Section */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="text-[8px] uppercase tracking-[0.2em] text-gray-400 border border-gray-100 px-2 py-0.5 rounded-full bg-gray-50/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 whitespace-pre-line">
                  {product.story}
                </p>

                <div className="mb-10 bg-brand-50 p-6 border-l-2 border-brand-500">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-brand-900">Active Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="text-xs text-gray-600 border border-gray-200 px-3 py-1 bg-white">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-100 pt-8 gap-6">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Price per unit</span>
                    <span className="text-3xl font-heading text-brand-900">${product.price.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => onAddToCart(product.name, product.price)}
                    className="w-full sm:w-auto px-10 py-5 bg-brand-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-500 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <span>Add to Bag</span>
                    <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;