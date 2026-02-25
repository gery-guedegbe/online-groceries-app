import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async () => {
    const { username, email, password } = form;

    if (!email || !password)
      return Alert.alert(
        "Error",
        "Please enter valid username, email or password !",
      );

    try {
      setIsSubmitting(true);

      setTimeout(() => {
        try {
          console.log(
            `Username: ${username}, Email: ${email}, Password: ${password}`,
          );
          router.push("/(auth)/login");
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
      <ScrollView className="flex-1">
        <View className="flex flex-1 flex-col justify-between px-6 py-20">
          <View className="flex items-center justify-center p-10">
            <Image
              source={require("../../assets/images/carrot-icon.png")}
              resizeMode="contain"
              className="h-[56px] w-[48px]"
            />
          </View>

          <View className="flex flex-col items-start gap-8">
            <View className="gap-3">
              <Text className="font-gilroy-semibold text-[26px] font-semibold leading-7 text-neutral900">
                Sign Up
              </Text>

              <Text className="font-gilroy-medium text-base font-medium leading-4 text-neutral600">
                Enter your credentials to continue
              </Text>
            </View>

            <View className="w-full gap-8">
              <AppInput
                hasIcon
                label="Username"
                value={form.username}
                placeholder="Enter your username"
                keyboardType="default"
                onChangeText={(text) =>
                  setForm((prev) => ({ ...prev, username: text }))
                }
              />

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

                <Text className="font-gilroy-medium text-sm font-medium text-neutral600">
                  By continuing you agree to our{" "}
                  <Text className="text-primary">Terms of Service</Text> and
                  <Text className="text-primary"> Privacy Policy.</Text>
                </Text>
              </View>
            </View>
          </View>

          <AppButton
            onPress={handleSubmit}
            style={{ marginTop: 24 }}
            loading={isSubmitting}
            disabled={isSubmitting}
            accessibilityLabel={
              !form.email || !form.password
                ? "Please enter your valid email or password"
                : "Login"
            }
          >
            <Text className="font-gilroy-semibold text-base font-semibold text-white">
              Sign Up
            </Text>
          </AppButton>

          <View className="mt-6 flex flex-row items-center justify-center gap-1 text-center">
            <Text className="font-gilroy-semibold text-sm font-semibold text-neutral900">
              Already have an account?
            </Text>

            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text className="font-gilroy-semibold text-sm font-semibold text-primary">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default SignUp;
