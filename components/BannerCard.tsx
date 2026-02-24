import { images } from "@/constants/theme";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import PaginationDot from "./PaginationDot";

const DATA = [
  { id: "1", title: "Fresh Vegetables", subtitle: "Get Up To 40% OFF" },
  { id: "2", title: "Organic Fruits", subtitle: "Fresh from the farm" },
  { id: "3", title: "Daily Deals", subtitle: "Limited time offer" },
];

const BannerCard = () => {
  const { width: windowWidth } = useWindowDimensions();
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (activeIndex + 1) % DATA.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000); // Intervalle de 3 secondes

    return () => clearInterval(interval);
  }, [activeIndex]);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const renderItem = ({ item }: { item: (typeof DATA)[0] }) => (
    <View style={{ width: windowWidth - 40 }}>
      <View className="flex h-full w-full flex-row items-center justify-between gap-2 p-1.5">
        <Image
          source={require("../assets/images/banner/banner-image.png")}
          resizeMode="contain"
          className="h-[105px] w-[122px]"
        />

        <View className="flex flex-col items-center">
          <Text className="font-aclonica-regular text-[20px] text-neutral800">
            {item.title}
          </Text>

          <Text className="font-airbnbcereal-medium text-sm font-medium text-primary">
            {item.subtitle}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="h-[115px] w-full overflow-hidden rounded-lg">
      <ImageBackground
        source={images.banner_bg}
        resizeMode="cover"
        className="h-full w-full"
      >
        <ImageBackground
          source={images.banner_bg_transparent}
          resizeMode="cover"
          className="relative h-full w-full flex-1"
        >
          <Animated.FlatList
            ref={flatListRef as any}
            data={DATA}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
            renderItem={renderItem}
          />

          {/* Pagination Dots */}
          <View className="absolute bottom-5 left-0 right-0 flex flex-row items-center justify-center gap-1">
            {DATA.map((_, i) => (
              <PaginationDot
                key={i}
                index={i}
                scrollX={scrollX}
                windowWidth={windowWidth}
              />
            ))}
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default BannerCard;
