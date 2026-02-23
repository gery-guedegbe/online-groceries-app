import ProductCard from "@/components/productCard";
import { products } from "@/constants/productData";
import { images } from "@/constants/theme";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const exclusiveProducts = products.filter((item) => Number(item.id) < 3);
  const bestSellingProducts = products.filter(
    (item) => Number(item.id) >= 3 && Number(item.id) < 5,
  );

  const handleIsPressed = () => {};

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View className="flex flex-1 flex-col items-center justify-center gap-6 bg-white p-5">
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

          <View className="flex h-[51px] w-full flex-row items-center gap-2 rounded-[15px] bg-[#f2f3f2] pl-3.5">
            <Image
              source={images.loop_icon}
              resizeMode="contain"
              className="h-[18px] w-[18px]"
            />

            <TextInput
              className="h-full font-gilroy-semibold text-sm font-semibold text-neutral600"
              placeholder="Search Store"
            />
          </View>

          <View className="h-[115px] w-full rounded-full">
            <Image
              source={images.shop_banner}
              resizeMode="cover"
              className="h-full w-full"
            />
          </View>

          <View className="gap-4">
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="font-gilroy-semibold text-[24px] font-semibold text-neutral900">
                Exclusive Offer
              </Text>

              <Text className="font-gilroy-semibold text-base font-semibold text-primary">
                See all
              </Text>
            </View>

            <View className="flex w-full flex-row gap-4">
              {exclusiveProducts.map((item) => (
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
                  onPress={handleIsPressed}
                />
              ))}
            </View>
          </View>

          <View className="gap-4">
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="font-gilroy-semibold text-[24px] font-semibold text-neutral900">
                Best Selling
              </Text>

              <Text className="font-gilroy-semibold text-base font-semibold text-primary">
                See all
              </Text>
            </View>

            <View className="flex w-full flex-row gap-4">
              {bestSellingProducts.map((item) => (
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
                  onPress={handleIsPressed}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
