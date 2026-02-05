import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
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

const Number = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  const router = useRouter();

  // Fonction pour formater le numéro de téléphone
  const formatPhoneNumber = (text: string) => {
    // Supprime tous les caractères non numériques
    const cleaned = text.replace(/\D/g, "");

    // Limite à 10 chiffres (sans l'indicatif)
    const limited = cleaned.slice(0, 10);

    // Formate selon le pattern XXX-XXX-XXXX
    const match = limited.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      const part1 = match[1];
      const part2 = match[2];
      const part3 = match[3];

      let formatted = "";
      if (part1) formatted += part1;
      if (part2) formatted += (formatted ? "-" : "") + part2;
      if (part3) formatted += (formatted ? "-" : "") + part3;

      return formatted;
    }

    return limited;
  };

  const handlePhoneChange = (text: string) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted);
  };

  const handleSubmit = () => {
    // Supprime les tirets pour obtenir juste les chiffres
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    if (digitsOnly.length < 10) {
      Alert.alert(
        "Numéro incomplet",
        "Veuillez entrer un numéro de téléphone valide (10 chiffres).",
        [{ text: "OK", style: "default" }],
      );
      textInputRef.current?.focus();
      return;
    }

    // Format complet avec indicatif
    const fullNumber = `+880${digitsOnly}`;

    // Naviguer vers l'écran de vérification
    router.push({
      pathname: "/(auth)/verify",
      params: { phoneNumber: fullNumber },
    });
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
              accessibilityHint="Retourne à l'écran précédent"
              className="bg-transparent"
            >
              <Image
                source={require("../../assets/images/back-icon.png")}
                className=""
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text className="mt-4 font-gilroy-semibold text-[24px] font-semibold text-neutral900">
              Enter your mobile number
            </Text>

            <Text className="font-gilroy-semibold text-base font-semibold text-neutral600">
              Mobile Number
            </Text>

            <View className="flex w-full flex-row items-center gap-1 border-b border-b-neutral500 pb-2">
              <View className="flex flex-row gap-2">
                <Image
                  source={require("../../assets/images/flage-image.png")}
                  resizeMode="cover"
                />

                <Text className="font-gilroy-medium text-[18px] font-medium leading-7 text-neutral800">
                  +880
                </Text>
              </View>

              <TextInput
                keyboardType="phone-pad"
                autoComplete="tel"
                textContentType="telephoneNumber"
                returnKeyType="done"
                placeholder="XXX-XXX-XXXX"
                placeholderTextColor={colors.neutral700}
                ref={textInputRef}
                value={phoneNumber}
                onChangeText={handlePhoneChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 bg-transparent font-gilroy-medium text-[18px] font-medium leading-7 text-neutral800"
              />
            </View>

            {/* Indicateur de validation */}
            {phoneNumber.length > 0 && (
              <View className="mt-2">
                <Text
                  className={`font-gilroy-regular text-sm ${
                    phoneNumber.replace(/\D/g, "").length === 10
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  {phoneNumber.replace(/\D/g, "").length === 10
                    ? "✓ Numéro valide"
                    : `${phoneNumber.replace(/\D/g, "").length}/10 chiffres`}
                </Text>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          accessible={true}
          accessibilityRole="button"
          className="mb-8 mr-8 flex h-[67px] w-[67px] items-center justify-center self-end rounded-full bg-primary"
        >
          <Image
            source={require("../../assets/images/right-icon.png")}
            className=""
            resizeMode="cover"
          />
        </TouchableOpacity>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  );
};

export default Number;
