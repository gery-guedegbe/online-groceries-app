import AppButton from "@/components/ui/AppButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const OrderAccepted = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View className="flex-1 p-6">
        <View className="flex flex-1 flex-col items-center justify-center text-center">
          <Image
            source={images.order_accepted_image}
            resizeMode="contain"
            className="mr-10 h-[240px] w-[269px]"
          />

          <View className="mt-12 gap-4">
            <Text className="text-center font-gilroy-semibold text-[28px] font-semibold text-neutral900">
              Your Order has been accepted
            </Text>

            <Text className="px-10 text-center font-gilroy-medium text-base font-medium leading-[21px] text-neutral600">
              Your items has been placed and is on it's way to being processed
            </Text>
          </View>
        </View>

        <View className="">
          <AppButton>
            <Text className="font-gilroy-bold text-lg text-white">
              Track Order
            </Text>
          </AppButton>

          <Pressable
            hitSlop={10}
            onPress={() => router.push("/shop")}
            className="flex items-center justify-center p-6"
          >
            <Text className="text-center font-gilroy-semibold text-base font-semibold text-neutral900">
              Back to home
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default OrderAccepted;
