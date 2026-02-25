import { CheckoutOrder } from "@/components/order/CheckoutOrder";
import AppButton from "@/components/ui/AppButton";
import { images } from "@/constants/theme";
import { useStore } from "@/store/store";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const cart = useStore((state) => state.cart);

  const updateQuantity = useStore((state) => state.updateQuantity);

  const removeFromCart = useStore((state) => state.removeFromCart);

  const handleIncrease = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity + 1);
  };

  const handleDecrease = (productId: string, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    } else {
      // Si la quantité est de 1 et qu'on diminue, on retire l'article
      removeFromCart(productId);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const totalPrice = cart
    .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckoutModal = () => {
    setIsOpen(true);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    // cart.forEach((item) => removeFromCart(item.product.id));

    router.push("/order-accepted/OrderAccepted");

    setIsOpen(false);
  };

  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <View className="flex-1">
        <Text className="border-b border-b-neutral500 p-7 text-center font-gilroy-bold text-xl text-neutral900">
          My Cart
        </Text>

        <ScrollView className="flex-1">
          <View>
            {cart.length > 0 ? (
              cart.map((item) => (
                <View
                  key={item.product.id}
                  className="flex w-full flex-row items-center gap-7 border-b border-b-neutral500 px-6 py-4"
                >
                  <Image
                    source={item.product.image}
                    resizeMode="contain"
                    className="h-[64px] w-[70px]"
                  />

                  <View className="flex-1 gap-4">
                    <View className="flex flex-row items-start justify-between">
                      <View className="gap-1.5">
                        <Text className="font-gilroy-bold text-base font-bold leading-[18px] text-neutral900">
                          {item.product.name}
                        </Text>

                        <Text className="font-gilroy-medium text-sm font-medium leading-[18px] text-neutral600">
                          {item.product.unit}, Price
                        </Text>
                      </View>

                      <Pressable
                        onPress={() => handleRemoveFromCart(item.product.id)}
                        hitSlop={20}
                      >
                        <Image
                          source={images.close_icon}
                          resizeMode="contain"
                          className="h-[14px] w-[14px]"
                        />
                      </Pressable>
                    </View>

                    <View className="flex flex-row items-center justify-between">
                      <View className="flex flex-row items-center gap-4">
                        <Pressable
                          onPress={() =>
                            handleDecrease(item.product.id, item.quantity)
                          }
                          hitSlop={20}
                        >
                          <View className="flex h-[46px] w-[46px] items-center justify-center rounded-[17px] border border-neutral500">
                            <Image
                              source={images.minus_icon}
                              resizeMode="contain"
                              className="h-[3px] w-[17px]"
                            />
                          </View>
                        </Pressable>

                        <View className="flex items-center justify-center text-center">
                          <Text className="font-gilroy-semibold text-base font-semibold leading-[18px] text-neutral900">
                            {item.quantity}
                          </Text>
                        </View>

                        <Pressable
                          onPress={() =>
                            handleIncrease(item.product.id, item.quantity)
                          }
                          hitSlop={20}
                        >
                          <View className="flex h-[46px] w-[46px] items-center justify-center rounded-[17px] border border-neutral500">
                            <Image
                              source={images.plus_green_icon}
                              resizeMode="contain"
                              className="h-[17px] w-[17px]"
                            />
                          </View>
                        </Pressable>
                      </View>

                      <Text className="font-gilroy-semibold text-lg font-semibold leading-[18px] text-neutral900">
                        {item.product.price}
                      </Text>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <View className="mt-64 flex flex-1 items-center justify-center gap-2 text-center">
                <Text className="font-gilroy-semibold text-lg font-semibold text-neutral800">
                  No item in the cart
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

        {cart.length > 0 && (
          <View className="p-4">
            <AppButton onPress={handleCheckoutModal}>
              <Text className="font-gilroy-semibold text-base font-semibold text-neutral400">
                Go to Checkout
              </Text>
            </AppButton>
          </View>
        )}
      </View>

      {isOpen && cart.length > 0 && (
        <CheckoutOrder
          totalPrice={totalPrice}
          onPress={handlePlaceOrder}
          onClose={() => setIsOpen(false)}
          visible={isOpen}
        />
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
