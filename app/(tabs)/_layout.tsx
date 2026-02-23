import { images } from "@/constants/theme";
import { TabBarIconProps } from "@/types/types";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
  <View className="mt-12 flex min-h-full min-w-20 items-center justify-center gap-1">
    <Image
      source={icon}
      className="size-7"
      resizeMode="contain"
      tintColor={focused ? "#53b175" : "#181725"}
    />

    <Text
      className={`font-gilroy-semibold text-sm font-semibold ${focused ? "text-primary" : "text-neutral900"}`}
    >
      {title}
    </Text>
  </View>
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          width: "100%",
          height: 92,
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Shop"
              icon={images.store_icon}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Explore"
              icon={images.search_icon}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Cart"
              icon={images.cart_icon}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favourite",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Favorite"
              icon={images.heart_icon}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Account"
              icon={images.user_icon}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
