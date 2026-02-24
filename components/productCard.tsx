import { images } from "@/constants/theme";
import { Product } from "@/types/types";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ProductCardProps extends Product {
  onPress: (product: Product) => void;
}

const ProductCard = ({
  id,
  image,
  name,
  unit,
  price,
  category,
  description,
  rating,
  onPress,
}: ProductCardProps) => {
  return (
    <View className="m-2 flex h-[248px] max-w-[154px] flex-1 flex-col justify-between gap-2 rounded-[18px] border border-neutral500 p-3">
      <Image
        source={image}
        resizeMode="contain"
        className="mx-auto h-[62px] w-[103px] flex-1"
      />

      <View className="space-y-4">
        <Text className="font-gilroy-bold text-base font-bold leading-[18px] text-neutral900">
          {name}
        </Text>

        <Text className="text-neutral600s font-gilroy-medium text-sm font-medium leading-[18px]">
          {unit}
        </Text>
      </View>

      <View className="flex w-full flex-row items-center justify-between">
        <Text className="font-gilroy-semibold text-lg font-semibold leading-[18px] text-neutral900">
          ${price}
        </Text>

        <TouchableOpacity
          onPress={() =>
            onPress({
              id,
              name,
              price,
              unit,
              category,
              description,
              image,
              rating,
            })
          }
          className="flex h-[45px] w-[45px] items-center justify-center rounded-[17px] bg-primary"
        >
          <Image
            source={images.plus_icon}
            resizeMode="contain"
            className="h-[17px] w-[17px]"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
