import { CATEGORIES } from "@/constants/productData";
import React from "react";
import { Image, Pressable, Text } from "react-native";

const CategoryCard = ({ item }: { item: (typeof CATEGORIES)[0] }) => (
  <Pressable
    style={{ backgroundColor: item.bg, borderColor: item.border }}
    className="m-2 flex h-[190px] flex-1 flex-col items-center justify-center rounded-[18px] border p-2"
    accessibilityRole="button"
    accessibilityLabel={`Category ${item.title}`}
  >
    <Image
      source={item.image}
      resizeMode="contain"
      className="mb-4 h-[74px] w-[111px]"
    />

    <Text className="text-center font-gilroy-bold text-base font-bold leading-[22px] text-neutral900">
      {item.title}
    </Text>
  </Pressable>
);

export default CategoryCard;

// w-full max-w-[174px] flex-1
// m-2 flex h-[190px] flex-col items-center justify-center rounded-[18px] border p-2
