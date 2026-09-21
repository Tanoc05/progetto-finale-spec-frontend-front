export type Food = {
  title: string;       // es. "Mela Fuji", "Petto di Pollo", "Mandorle"
  category: string;    // es. "Frutta", "Carne", "Frutta Secca", "Latticini", "Cereali"
  calories?: number;       // kcal per 100g (es. 52, 165, 579)
  proteins?: number;       // g di proteine per 100g
  carbs?: number;          // g di carboidrati per 100g
  fats?: number;           // g di grassi per 100g
  fiber?: number;          // g di fibre per 100g
  origin?: string;         // es. "Italia", "Spagna", "Origine UE"
  season?: string;         // es. "Autunno", "Tutto l'anno", "Estate"
  isGlutenFree?: boolean;  // true / false
  isVegan?: boolean; 
  ingredients?: string[];      // true / false
  storageMethod?: string;  // es. "In frigo a 4°C", "Luogo fresco e asciutto"
  description?: string;    // Breve descrizione nutrizionale
  imageUrl?: string; 
};