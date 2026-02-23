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
    name: "Bell Pepper Red",
    price: 4.99,
    unit: "1kg",
    category: "Vegetables",
    description: "Fresh red bell peppers",
    rating: 4.3,
    image: pepper_image,
  },
  {
    id: "4",
    name: "Beef Bone",
    price: 4.99,
    unit: "1kg",
    category: "Meat & Fish",
    description: "Beef bones perfect for soups",
    rating: 4.2,
    image: beef_image,
  },
  {
    id: "5",
    name: "Broiler Chicken",
    price: 4.99,
    unit: "1kg",
    category: "Meat & Fish",
    description: "Fresh broiler chicken meat",
    rating: 4.6,
    image: chicken_image,
  },
];
