import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="shop"
        options={{ title: "Shop", tabBarIcon: () => {} }}
      />

      <Tabs.Screen
        name="explore"
        options={{ title: "Explore", tabBarIcon: () => {} }}
      />

      <Tabs.Screen
        name="cart"
        options={{ title: "Cart", tabBarIcon: () => {} }}
      />

      <Tabs.Screen
        name="favourite"
        options={{ title: "Favourite", tabBarIcon: () => {} }}
      />

      <Tabs.Screen
        name="account"
        options={{ title: "Account", tabBarIcon: () => {} }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
