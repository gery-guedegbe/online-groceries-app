import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    const { email, password } = form;

    if (!email || !password)
      return Alert.alert("Error", "Please enter valid email or password !");

    try {
      setIsSubmitting(true);

      setTimeout(() => {
        try {
          console.log(`Email: ${email}, Password: ${password}`);
          router.push("/(tabs)/shop");
        } catch (error: any) {
          Alert.alert("Error", error.message);
        } finally {
          setIsSubmitting(false);
        }
      }, 1500);
    } catch (error: any) {
      Alert.alert("Error", error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex-1 px-6">
        <View className="flex items-center justify-center p-24">
          <Image
            source={require("../../assets/images/carrot-icon.png")}
            resizeMode="contain"
            className="h-[56px] w-[48px]"
          />
        </View>

        <View className="flex flex-col items-start gap-12">
          <View className="gap-3">
            <Text className="font-gilroy-semibold text-[26px] font-semibold leading-7 text-neutral900">
              Loging
            </Text>

            <Text className="font-gilroy-medium text-base font-medium leading-4 text-neutral600">
              Enter your emails and password
            </Text>
          </View>

          <View className="w-full gap-8">
            <AppInput
              hasIcon
              label="Email"
              value={form.email}
              placeholder="Enter your email"
              keyboardType="email-address"
              onChangeText={(text) =>
                setForm((prev) => ({ ...prev, email: text }))
              }
            />

            <View className="gap-4">
              <AppInput
                hasIcon
                label="Password"
                value={form.password}
                placeholder="Enter your password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={(text) =>
                  setForm((prev) => ({ ...prev, password: text }))
                }
              />

              <TouchableOpacity className="self-end">
                <Text className="font-gilroy-medium text-sm font-medium text-neutral900">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <AppButton
          onPress={handleSubmit}
          style={{ marginTop: 30 }}
          loading={isSubmitting}
          disabled={isSubmitting}
          accessibilityLabel={
            !form.email || !form.password
              ? "Please enter your valid email or password"
              : "Login"
          }
        >
          <Text className="font-gilroy-semibold text-base font-semibold text-white">
            Log In
          </Text>
        </AppButton>

        <View className="mt-6 flex flex-row items-center justify-center gap-1 text-center">
          <Text className="font-gilroy-semibold text-sm font-semibold text-neutral900">
            Don&apos;t have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
            <Text className="font-gilroy-semibold text-sm font-semibold text-primary">
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
