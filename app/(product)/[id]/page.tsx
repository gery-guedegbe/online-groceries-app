import AppButton from "@/components/ui/AppButton";
import { products } from "@/constants/productData";
import { images } from "@/constants/theme";
import { useStore } from "@/store/store";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetailScreen = () => {
  const router = useRouter();

  const { id } = useLocalSearchParams();

  const favorites = useStore((state) => state.favorites);

  const toggleFavorite = useStore((state) => state.toggleFavorite);

  const updateQuantity = useStore((state) => state.updateQuantity);

  const addToCart = useStore((state) => state.addToCart);

  const isFavorite = favorites.includes(id as string);

  const product = products.find((p) => p.id === id);

  const cartItem = useStore((state) =>
    state.cart.find((item) => item.product.id === id),
  );

  const currentQuantity = cartItem ? cartItem.quantity : 0;

  const handleIncrease = () => {
    if (!cartItem && product) {
      addToCart(product);
    } else {
      updateQuantity(id as string, currentQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (currentQuantity > 0) {
      updateQuantity(id as string, currentQuantity - 1);
    }
  };

  const handleAddToBasket = () => {
    if (product && currentQuantity === 0) {
      addToCart(product);
    }

    router.push("/(tabs)/cart");
  };

  if (!product)
    return (
      <View className="flex flex-1 items-center justify-center text-center">
        <Text className="font-gilroy-semibold text-base font-semibold text-neutral800">
          Produit non trouvé
        </Text>
      </View>
    );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex h-[371px] flex-col items-center rounded-b-[40px] bg-[#F2F3F2] p-6">
          <View className="flex w-full flex-row items-center justify-between">
            <Pressable onPress={() => router.back()}>
              <Image
                source={images.back_icon}
                resizeMode="contain"
                className="h-[18px] w-[10px]"
              />
            </Pressable>

            <Image
              source={images.export_icon}
              resizeMode="contain"
              className="h-[18px] w-[18px]"
            />
          </View>

          <Image
            source={product.image}
            className="h-[200px] w-[329px] flex-1"
            resizeMode="contain"
          />
        </View>

        <View className="gap-6 p-6">
          <View className="flex w-full flex-row items-start justify-between">
            <View className="gap-2">
              <Text className="font-gilroy-bold text-2xl font-bold leading-[18px] text-neutral900">
                {product.name}
              </Text>

              <Text className="font-gilroy-semibold text-base font-semibold leading-[18px] text-neutral600">
                {product.unit}, Price
              </Text>
            </View>

            <Pressable onPress={() => toggleFavorite(product.id)}>
              <Image
                source={images.non_favorite_icon}
                resizeMode="contain"
                className="h-[24px] w-[24px]"
                style={{ tintColor: isFavorite ? "#53B175" : "#7C7C7C" }}
              />
            </Pressable>
          </View>

          <View className="flex w-full flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-4">
              <Pressable onPress={handleDecrease} hitSlop={20}>
                <Image
                  source={images.minus_icon}
                  resizeMode="contain"
                  className="h-[3px] w-[17px]"
                />
              </Pressable>

              <View className="flex h-[45px] w-[45px] items-center justify-center rounded-[17px] border border-neutral500 text-center">
                <Text className="font-gilroy-semibold text-lg font-semibold leading-[18px] text-neutral900">
                  {currentQuantity}
                </Text>
              </View>

              <Pressable onPress={handleIncrease} hitSlop={20}>
                <Image
                  source={images.plus_green_icon}
                  resizeMode="contain"
                  className="h-[17px] w-[17px]"
                />
              </Pressable>
            </View>

            <Text className="font-gilroy-bold text-2xl font-bold leading-[18px] text-neutral900">
              ${product.price}
            </Text>
          </View>

          <View>
            <View className="border-t border-t-neutral500">
              <Text className="mt-4 font-gilroy-semibold text-base font-semibold leading-[18px] text-neutral900">
                Product Detail
              </Text>

              <Text className="mt-2 font-gilroy-medium text-[13px] font-medium leading-[21px] text-neutral600">
                {product.description}
              </Text>
            </View>
          </View>

          <View className="flex w-full flex-row items-center justify-between border-t border-t-neutral500 pt-4">
            <Text className="font-gilroy-semibold text-base font-semibold leading-[18px] text-neutral900">
              Nutritions
            </Text>

            <View className="flex h-[18px] w-[33px] items-center justify-center rounded-[5px] bg-[#EBEBEB]">
              <Text className="font-gilroy-semibold text-[9px] font-semibold leading-[13.5px] text-neutral600">
                100gr
              </Text>
            </View>
          </View>

          <View className="flex w-full flex-row items-center justify-between border-t border-t-neutral500 pt-4">
            <Text className="font-gilroy-semibold text-base font-semibold leading-[18px] text-neutral900">
              Review
            </Text>

            <View className="flex flex-row items-center justify-center gap-2">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  source={images.star_icon}
                  resizeMode="contain"
                  className="h-[14px] w-[15px]"
                  style={{
                    tintColor:
                      index < Math.round(product.rating)
                        ? "#F3603F"
                        : "#EBEBEB",
                  }}
                />
              ))}
            </View>
          </View>

          <AppButton onPress={handleAddToBasket}>
            <Text className="font-gilroy-semibold text-base font-semibold text-neutral400">
              Add To Basket
            </Text>
          </AppButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
