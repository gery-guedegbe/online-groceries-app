import { images } from "@/constants/theme";
import {
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AppButton from "../ui/AppButton";

interface Props {
  onClose: () => void;
  onPress: () => void;
  totalPrice: string;
  visible: boolean;
}

interface CheckoutRowProps {
  label: string;
  value?: string;
  icon?: ImageSourcePropType;
  showArrow: boolean;
}

export const CheckoutOrder = ({
  onClose,
  onPress,
  totalPrice,
  visible,
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <Modal
        transparent
        visible={visible}
        onRequestClose={onClose}
        animationType="none"
        className="flex-1"
      >
        <View className="flex-1 justify-end">
          {/* 1. L'OVERLAY : Animation de fondu (Fade) */}
          <Animated.View
            entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(500)}
            className="absolute inset-0 bg-black/50"
          >
            <Pressable className="flex-1" onPress={onClose} />
          </Animated.View>

          {/* 2. LE CONTENU : Animation de montée (Slide) */}
          <Animated.View
            entering={SlideInDown.springify()}
            exiting={SlideOutDown.duration(300)}
            style={{
              paddingBottom: insets.bottom > 0 ? insets.bottom : 24,
            }}
            className="rounded-t-[30px] bg-white shadow-xl"
          >
            <View className="mb-2 flex flex-row items-center justify-between border-b border-neutral500 p-6 pb-5">
              <Text className="font-gilroy-semibold text-2xl font-semibold text-neutral900">
                Checkout
              </Text>

              <Pressable onPress={onClose} hitSlop={20}>
                <Image
                  source={images.close_icon_black}
                  className="h-4 w-4"
                  resizeMode="contain"
                />
              </Pressable>
            </View>

            <View className="p-6">
              <CheckoutRow label="Delivery" value="Select Method" showArrow />

              <CheckoutRow
                label="Payment"
                icon={images.master_card}
                showArrow
              />

              <CheckoutRow label="Promo Code" value="Pick discount" showArrow />

              <CheckoutRow
                label="Total Cost"
                value={`$${totalPrice}`}
                showArrow
              />

              <View className="my-4">
                <Text className="font-gilroy-semibold text-sm font-semibold text-neutral600">
                  By placing an order you agree to our
                </Text>

                <Text className="font-gilroy-semibold text-sm font-semibold text-neutral900">
                  Terms <Text className="text-neutral600">And</Text> Conditions
                </Text>
              </View>

              <AppButton onPress={onPress}>
                <Text className="font-gilroy-bold text-lg text-white">
                  Place Order
                </Text>
              </AppButton>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const CheckoutRow = ({ label, value, icon, showArrow }: CheckoutRowProps) => (
  <View className="flex flex-row items-center justify-between border-b border-b-neutral500 py-4">
    <Text className="font-gilroy-semibold text-lg font-semibold text-neutral600">
      {label}
    </Text>

    <View className="flex flex-row items-center gap-4">
      {icon && <Image source={icon} className="h-4 w-6" />}

      {value && (
        <Text className="font-gilroy-semibold text-base font-semibold text-neutral900">
          {value}
        </Text>
      )}

      {showArrow && (
        <Image
          source={images.right_black_arrow}
          resizeMode="contain"
          className="h-[14px] w-2"
        />
      )}
    </View>
  </View>
);
