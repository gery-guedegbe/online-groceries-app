import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const AccountScreen = () => {
  const router = useRouter();

  const menuItems = [
    { id: 1, title: "Orders", icon: images.orders_icon },
    { id: 2, title: "My Details", icon: images.my_details_icon },
    { id: 3, title: "Delivery Address", icon: images.delicery_address_icon },
    { id: 4, title: "Payment Methods", icon: images.payment_method_icon },
    { id: 5, title: "Promo Card", icon: images.promo_card_icon },
    { id: 6, title: "Notifications", icon: images.bell_icon },
    { id: 7, title: "Help", icon: images.help_icon },
    { id: 8, title: "About", icon: images.about_icon },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="mt-4 flex flex-row items-center justify-start gap-4 p-4">
        <Image
          source={images.user_profile_image}
          resizeMode="contain"
          className="h-[64] w-[64px] rounded-[27px]"
        />

        <View className="gap-1.5">
          <View className="flex flex-row items-center gap-3">
            <Text className="font-gilroy-bold text-[20px] text-lg font-bold leading-[18px] text-neutral900">
              Jonh DOE
            </Text>

            <Image
              source={images.edit_icon}
              resizeMode="contain"
              className="h-[15px] w-[15px]"
            />
          </View>

          <Text className="font-gilroy-medium text-base font-normal leading-[18px] text-neutral600">
            jonhdoe@gmail.com
          </Text>
        </View>
      </View>

      <View className="mt-4">
        {menuItems.map((item) => (
          <View
            key={item.id}
            className="flex w-full flex-row items-center justify-between border-y border-y-neutral500 p-6"
          >
            <View className="flex flex-row items-center justify-center gap-4">
              <Image
                source={item.icon}
                resizeMode="contain"
                className="h-[20px] w-[18px]"
              />

              <Text className="font-gilroy-semibold text-lg font-semibold text-neutral900">
                {item.title}
              </Text>
            </View>

            <Image
              source={images.right_black_arrow}
              resizeMode="contain"
              className="h-[14px] w-[8px]"
            />
          </View>
        ))}
      </View>

      <View className="mt-4 px-4 py-6">
        <TouchableOpacity
          accessibilityRole="button"
          accessible={true}
          onPress={() => router.push("/(auth)/login")}
          className="flex h-[67px] w-full flex-row items-center justify-between rounded-[19px] bg-[#F2F3F2] p-6 font-bold"
        >
          <Image
            source={images.logout_icon}
            resizeMode="contain"
            className="h-[18px] w-[18px]"
          />

          <Text className="font-gilroy-semibold text-lg font-semibold text-primary">
            Log Out
          </Text>

          <View />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
