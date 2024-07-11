interface PizzaSize {
  name: string;
  price: number;
}
  
interface PizzaDough {
  name: string;
  price: number;
}
  
interface Pizza {
  id: string;
  name: string;
  ingredients: Ingredient[];
  toppings: Ingredient[];
  description: string;
  sizes: Size[];
  doughs: Dough[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
}
  
interface PizzaToppings {
  name: string;
  cost: number;
  img: string;
}
  
interface CartItem {
  pizza: Pizza;
  size: string;
  toppings: PizzaToppings[];
  price: number;
  initialPrice: number;
}