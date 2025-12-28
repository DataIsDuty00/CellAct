export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  story: string;
  ingredients: string[];
  image: string;
  category: 'ready-made' | 'custom' | 'kit';
  isVegan: boolean;
  tags: string[];
}

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  clinic: string;
}

export enum AppView {
  HOME = 'HOME',
  APPOINTMENT = 'APPOINTMENT',
  PRODUCTS = 'PRODUCTS',
  TECHNOLOGY = 'TECHNOLOGY',
  CART = 'CART',
}

export interface IngredientRecommendation {
  name: string;
  benefit: string;
}

export interface Routine {
  morning: string[];
  evening: string[];
}

export interface SkinAnalysisResult {
  skinType: string;
  concerns: string[];
  recommendedIngredients: IngredientRecommendation[];
  routine: Routine;
  customFormulaName: string;
  expertNote: string;
}