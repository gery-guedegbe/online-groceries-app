import banana_image from "../assets/images/banana-image.png";
import apple_image from "../assets/images/product-images/apple-image.png";
import beef_image from "../assets/images/product-images/beef-image.png";
import chicken_image from "../assets/images/product-images/chicken-image.png";
import ginger_image from "../assets/images/product-images/ginger-image.png";
import pepper_image from "../assets/images/product-images/pepper-image.png";

export const products = [
  {
    id: "1",
    name: "Red Apple",
    price: 4.99,
    unit: "1kg",
    category: "Fruits",
    description: "Fresh and juicy red apples",
    rating: 4.5,
    image: apple_image,
  },
  {
    id: "2",
    name: "Ginger",
    price: 4.99,
    unit: "250gm",
    category: "Vegetables",
    description: "Fresh ginger root for cooking",
    rating: 4.4,
    image: ginger_image,
  },
  {
    id: "3",
    name: "Organic Bananas",
    price: 4.99,
    unit: "1kg",
    category: "",
    description: "Fresh and juicy banana",
    rating: 4.4,
    image: banana_image,
  },
  {
    id: "4",
    name: "Bell Pepper Red",
    price: 4.99,
    unit: "1kg",
    category: "Vegetables",
    description: "Fresh red bell peppers",
    rating: 4.3,
    image: pepper_image,
  },
  {
    id: "5",
    name: "Beef Bone",
    price: 4.99,
    unit: "1kg",
    category: "Meat & Fish",
    description: "Beef bones perfect for soups",
    rating: 4.2,
    image: beef_image,
  },
  {
    id: "6",
    name: "Broiler Chicken",
    price: 4.99,
    unit: "1kg",
    category: "Meat & Fish",
    description: "Fresh broiler chicken meat",
    rating: 4.6,
    image: chicken_image,
  },
];

export const CATEGORIES = [
  {
    id: "1",
    title: "Frash Fruits\n& Vegetable",
    image: require("@/assets/images/categories/fruits.png"),
    bg: "#EEF8F1",
    border: "#53B175B2",
  },
  {
    id: "2",
    title: "Cooking Oil\n& Ghee",
    image: require("@/assets/images/categories/oil.png"),
    bg: "#FEF6ED",
    border: "#F8A44CB2",
  },
  {
    id: "3",
    title: "Meat & Fish",
    image: require("@/assets/images/categories/meat.png"),
    bg: "#FDE9E7",
    border: "#F7A59EB2",
  },
  {
    id: "4",
    title: "Bakery & Snacks",
    image: require("@/assets/images/categories/bakery.png"),
    bg: "#F4EBF7",
    border: "#D3B0E0B2",
  },
  {
    id: "5",
    title: "Dairy & Eggs",
    image: require("@/assets/images/categories/dairy.png"),
    bg: "#FFF9E5",
    border: "#FDE598B2",
  },
  {
    id: "6",
    title: "Beverages",
    image: require("@/assets/images/categories/beverages.png"),
    bg: "#EDF7FC",
    border: "#B7DFF5B2",
  },
];
