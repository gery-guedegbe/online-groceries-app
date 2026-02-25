import BannerCard from "@/components/BannerCard";
import ProductCard from "@/components/productCard";
import AddToCartButton from "@/components/ui/AddToCartButton";
import { products } from "@/constants/productData";
import { images } from "@/constants/theme";
import { useStore } from "@/store/store";
import { Product } from "@/types/types";
import { useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const cart = useStore((state) => state.cart);

  const addToCart = useStore((state) => state.addToCart);

  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAddToCart = useCallback(
    (item: Product) => {
      addToCart(item);

      setShowToast(true);

      // 3. Reset du timer (Logique Senior : on annule le précédent avant d'en créer un nouveau)
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setShowToast(false);
      }, 3500); // Reste visible 3.5s
    },
    [addToCart],
  );

  const GROCERIES_DATA = [
    {
      id: "1",
      title: "Pulses",
      bg_color: "#FEF1E4",
      image: images.pulses_image,
    },
    {
      id: "2",
      title: "Rice",
      bg_color: "#E5F3EA",
      image: images.sack_of_rice_image,
    },
  ];

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white">
        <ScrollView className="flex-1">
          <View className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-5">
            <View className="flex flex-col items-center justify-center gap-2.5">
              <Image
                source={images.carrot}
                resizeMode="contain"
                className="h-[30px] w-[26px]"
              />

              <View className="flex flex-row items-center gap-2">
                <Image
                  source={images.location}
                  resizeMode="contain"
                  className="h-[18px] w-[15px]"
                />

                <Text className="font-gilroy-semibold text-lg font-semibold text-[#4c4f4d]">
                  Dhaka, Banassre
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => router.push("/explore")}
              className="flex h-[51px] w-full flex-row items-center gap-2 rounded-[15px] bg-[#f2f3f2] pl-3.5"
            >
              <Image
                source={images.loop_icon}
                resizeMode="contain"
                className="h-[18px] w-[18px]"
              />

              <View className="flex-1 justify-center">
                <Text className="font-gilroy-semibold text-sm font-semibold text-neutral600">
                  Search Store
                </Text>
              </View>
            </Pressable>

            <BannerCard />

            <View className="flex-1 gap-4">
              <View className="flex w-full flex-row items-center justify-between">
                <Text className="font-gilroy-semibold text-[24px] font-semibold text-neutral900">
                  Exclusive Offer
                </Text>

                <Text className="font-gilroy-semibold text-base font-semibold text-primary">
                  See all
                </Text>
              </View>

              <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 2,
                }}
                renderItem={({ item }) => (
                  <View className="flex w-full flex-1 flex-row items-center justify-center gap-4">
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      unit={item.unit}
                      category={item.category}
                      description={item.description}
                      image={item.image}
                      rating={item.rating}
                      onPress={handleAddToCart}
                    />
                  </View>
                )}
              />
            </View>

            <View className="flex-1 gap-4">
              <View className="flex w-full flex-row items-center justify-between">
                <Text className="font-gilroy-semibold text-[24px] font-semibold text-neutral900">
                  Best Selling
                </Text>

                <Text className="font-gilroy-semibold text-base font-semibold text-primary">
                  See all
                </Text>
              </View>

              <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 2,
                }}
                renderItem={({ item }) => (
                  <View className="flex w-full flex-1 flex-row items-center justify-center gap-4">
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      unit={item.unit}
                      category={item.category}
                      description={item.description}
                      image={item.image}
                      rating={item.rating}
                      onPress={handleAddToCart}
                    />
                  </View>
                )}
              />
            </View>

            <View className="flex-1 gap-4">
              <View className="flex w-full flex-row items-center justify-between">
                <Text className="font-gilroy-semibold text-[24px] font-semibold text-neutral900">
                  Groceries
                </Text>

                <Text className="font-gilroy-semibold text-base font-semibold text-primary">
                  See all
                </Text>
              </View>

              <View className="h-[105px] w-full">
                <FlatList
                  data={GROCERIES_DATA}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 2,
                    gap: 15,
                  }}
                  renderItem={({ item }) => (
                    <View
                      style={{ backgroundColor: item.bg_color }}
                      className="flex w-[248px] flex-1 flex-row items-center gap-3 rounded-[18px] px-6"
                    >
                      <Image
                        source={item.image}
                        resizeMode="contain"
                        className="h-[71px] w-[71px]"
                      />

                      <Text className="font-gilroy-semibold text-[20px] font-semibold text-[#3E423F]">
                        {item.title}
                      </Text>
                    </View>
                  )}
                />
              </View>

              <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 2,
                }}
                renderItem={({ item }) => (
                  <View className="flex w-full flex-1 flex-row items-center justify-center gap-4">
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      unit={item.unit}
                      category={item.category}
                      description={item.description}
                      image={item.image}
                      rating={item.rating}
                      onPress={handleAddToCart}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>

        <AddToCartButton
          isVisible={showToast}
          itemCount={cart.length}
          onHide={() => setShowToast(false)}
        />
      </View>
    </SafeAreaView>
  );
}
