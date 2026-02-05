import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { colors } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Verify = () => {
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textInputRef = useRef<TextInput>(null);
  const router = useRouter();

  // Récupérer le numéro depuis la navigation précédente
  const params = useLocalSearchParams();
  const phoneNumber = params.phoneNumber as string;

  const handleCodeChange = (text: string) => {
    // Garde seulement les 4 premiers chiffres
    const cleaned = text.replace(/\D/g, "").slice(0, 4);
    setCode(cleaned);

    // Auto-soumission si 4 chiffres
    if (cleaned.length === 4) {
      handleSubmit(cleaned);
    }
  };

  const handleSubmit = async (submittedCode = code) => {
    if (submittedCode.length !== 4 || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Simulation de vérification API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirige toujours vers "location" pour le développement
      router.replace("/(auth)/location");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = () => {
    Alert.alert(
      "Code renvoyé",
      "Un nouveau code a été envoyé à votre numéro.",
      [{ text: "OK" }],
    );
    setCode("");
    textInputRef.current?.focus();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScreenWrapper>
        <View className="relative flex flex-1 flex-col items-center justify-between bg-[#FEFEFE]/50 pb-2">
          <View className="flex flex-1 flex-col gap-6 px-6 pt-10">
            <TouchableOpacity
              onPress={() => router.back()}
              accessible={true}
              accessibilityLabel="Retour"
              accessibilityRole="button"
              className="bg-transparent"
            >
              <Image
                source={require("../../assets/images/back-icon.png")}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text className="mt-4 font-gilroy-semibold text-[24px] text-neutral900">
              Enter your 4-digit code
            </Text>

            <Text className="font-gilroy-semibold text-base text-neutral600">
              Code
            </Text>

            <View className="flex w-full flex-row items-center gap-1 border-b border-b-neutral500 pb-2">
              <TextInput
                ref={textInputRef}
                value={code}
                onChangeText={handleCodeChange}
                placeholder="----"
                placeholderTextColor={colors.neutral700}
                keyboardType="number-pad"
                maxLength={4}
                className="flex-1 bg-transparent text-left font-gilroy-medium text-[18px] text-neutral800"
                autoFocus
                editable={!isSubmitting}
                accessibilityLabel="Code de vérification à 4 chiffres"
              />
            </View>

            <Text className="pt-4 font-gilroy-medium text-base text-neutral600">
              Code sent to {phoneNumber || "your number"}
            </Text>

            {isSubmitting && (
              <Text className="font-gilroy-regular text-sm text-neutral600">
                Vérification en cours...
              </Text>
            )}
          </View>

          <View className="flex w-full flex-row items-center justify-between p-8">
            <TouchableOpacity
              onPress={handleResendCode}
              disabled={isSubmitting}
            >
              <Text
                className={`font-gilroy-medium text-lg ${
                  isSubmitting ? "text-neutral400" : "text-primary"
                }`}
              >
                Resend Code
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSubmit()}
              disabled={code.length !== 4 || isSubmitting}
              accessible={true}
              accessibilityRole="button"
              className={`flex h-[67px] w-[67px] items-center justify-center rounded-full bg-primary`}
            >
              <Image
                source={require("../../assets/images/right-icon.png")}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  );
};

export default Verify;
