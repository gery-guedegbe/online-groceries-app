import { CartItem, Product } from "@/types/types";
import { create } from "zustand";

type Store = {
  cart: CartItem[];
  favorites: string[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (productId: string) => void;
  clearCart: () => void;
};

export const useStore = create<Store>((set) => ({
  cart: [],
  favorites: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return { cart: [...state.cart, { product, quantity: 1 }] };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    })),

  toggleFavorite: (productId) =>
    set((state) => ({
      favorites: state.favorites.includes(productId)
        ? state.favorites.filter((id) => id !== productId)
        : [...state.favorites, productId],
    })),

  clearCart: () => set({ cart: [] }),
}));
