import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/productCard";
import AddToCartButton from "@/components/ui/AddToCartButton";
import { CATEGORIES, products } from "@/constants/productData";
import { images } from "@/constants/theme";
import { useStore } from "@/store/store";
import { Category, Product } from "@/types/types";
import React, { useCallback, useRef, useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type ExploreItem = Product | Category;

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);

  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSearching = searchQuery.length > 0;

  const filteredProducts: Product[] = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleAddToCart = useCallback(
    (item: Product) => {
      addToCart(item);

      setShowToast(true);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setShowToast(false);
      }, 3500); // Reste visible 3.5s
    },
    [addToCart],
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4 py-6">
        <Text className="mb-6 text-center font-gilroy-bold text-xl text-neutral900">
          {isSearching ? "Search Results" : "Find Products"}
        </Text>

        {/* Barre de recherche */}
        <View className="mb-6 flex h-[51px] w-full flex-row items-center gap-2 rounded-[15px] bg-[#f2f3f2] px-3.5">
          <Image
            source={images.loop_icon}
            className="h-[18px] w-[18px]"
            resizeMode="contain"
          />

          <TextInput
            className="h-full flex-1 font-gilroy-semibold text-sm text-neutral900"
            placeholder="Search Store"
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>

        {/* Liste dynamique (Catégories ou Produits) */}
        <FlatList<ExploreItem>
          data={isSearching ? filteredProducts : (CATEGORIES as Category[])}
          keyExtractor={(item) => item.id}
          numColumns={2}
          key={isSearching ? "products" : "categories"}
          contentContainerStyle={{ paddingBottom: 20 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                className="flex-1"
                entering={FadeInUp.delay(index * 30).duration(400)}
              >
                {isSearching ? (
                  <ProductCard
                    {...(item as Product)}
                    onPress={handleAddToCart}
                  />
                ) : (
                  <CategoryCard item={item as Category} />
                )}
              </Animated.View>
            );
          }}
        />

        <AddToCartButton
          isVisible={showToast}
          itemCount={cart.length}
          onHide={() => setShowToast(false)}
        />
      </View>
    </SafeAreaView>
  );
}
