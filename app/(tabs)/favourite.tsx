import AppButton from "@/components/ui/AppButton";
import { products } from "@/constants/productData";
import { images } from "@/constants/theme";
import { useStore } from "@/store/store";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FavouriteScreen = () => {
  const router = useRouter();

  const cart = useStore((state) => state.cart);

  const addToCart = useStore((state) => state.addToCart);

  const favorites = useStore((state) => state.favorites);

  const favoriteItems = products.filter((p) => favorites.includes(p.id));

  const handleNavigate = (id: string) => {
    router.push({
      pathname: "/(product)/[id]/page",
      params: { id: id },
    });
  };

  const handleAddAllToCart = () => {
    if (favoriteItems.length === 0) return;

    favoriteItems.forEach((product) => {
      const isAlreadyInCart = cart.some(
        (item) => item.product.id === product.id,
      );

      if (!isAlreadyInCart) {
        addToCart(product);
      }
    });

    router.push("/cart");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <Text className="border-b border-b-neutral500 p-7 text-center font-gilroy-bold text-xl text-neutral900">
          Favorites
        </Text>

        <ScrollView className="flex-1">
          <View>
            {favorites?.length > 0 ? (
              favoriteItems.map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => handleNavigate(item.id)}
                  className="flex w-full flex-row items-center gap-7 border-b border-b-neutral500 px-6 py-4"
                >
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    className="h-[64px] w-[70px]"
                  />

                  <View className="flex-1 gap-4">
                    <View className="flex flex-row items-center justify-between">
                      <View className="gap-1.5">
                        <Text className="font-gilroy-bold text-base font-bold leading-[18px] text-neutral900">
                          {item.name}
                        </Text>

                        <Text className="font-gilroy-medium text-sm font-medium leading-[18px] text-neutral600">
                          {item?.unit}, Price
                        </Text>
                      </View>

                      <View className="flex flex-row items-center justify-center gap-4">
                        <Text className="font-gilroy-semibold text-lg font-semibold leading-[18px] text-neutral900">
                          ${item?.price}
                        </Text>

                        <Image
                          source={images.right_black_arrow}
                          resizeMode="contain"
                          className="h-[14px] w-[8.4px]"
                          style={{ tintColor: "#181725" }}
                        />
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))
            ) : (
              <View className="mt-64 flex flex-1 items-center justify-center gap-2 text-center">
                <Text className="font-gilroy-semibold text-lg font-semibold text-neutral800">
                  No item in favorite
                </Text>

                <Pressable onPress={() => router.replace("/shop")}>
                  <Text className="font-gilroy-semibold text-sm font-semibold text-primary underline">
                    Back to home
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </ScrollView>

        <View className="p-4">
          <AppButton onPress={handleAddAllToCart}>
            <Text className="font-gilroy-semibold text-base font-semibold text-neutral400">
              Add All To Cart
            </Text>
          </AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavouriteScreen;
