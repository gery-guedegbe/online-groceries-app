import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";

interface Props {
  isVisible: boolean;
  onHide: () => void;
  itemCount: number;
}

const AddToCartButton = ({ isVisible, onHide, itemCount }: Props) => {
  const router = useRouter();
  const scale = useSharedValue(1);

  // Animation de "rebond" quand le nombre d'articles change
  useEffect(() => {
    if (itemCount > 0) {
      scale.value = withSequence(withSpring(1.05), withSpring(1));
    }
  }, [itemCount]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  if (!isVisible) return null;

  return (
    <Animated.View
      entering={FadeInDown.springify()}
      exiting={FadeOutDown.duration(300)}
      style={animatedStyle}
      className="absolute bottom-5 left-4 right-4 z-50"
    >
      <View className="flex h-[67px] flex-row items-center justify-between rounded-[19px] bg-[#6FAE79] px-5 shadow-lg shadow-black/20">
        <View className="flex flex-row items-center gap-3">
          <View className="h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <Text className="font-gilroy-bold text-xs text-white">
              {itemCount}
            </Text>
          </View>

          <Text className="font-gilroy-semibold text-base text-white">
            Added to Cart
          </Text>
        </View>

        <Pressable
          onPress={() => router.push("/(tabs)/cart")}
          className="flex flex-row items-center gap-2 rounded-xl bg-white/20 px-3 py-2"
        >
          <Text className="font-gilroy-semibold text-sm text-white">
            Open Cart
          </Text>

          <Image source={images.right_arrow} className="tint-white h-2 w-2" />
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default AddToCartButton;
