import AppButton from "@/components/ui/AppButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import SelectField from "@/components/ui/SelectField";
import SelectModal from "@/components/ui/SelectModal";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

const Location = () => {
  const [zone, setZone] = useState<string>();
  const [area, setArea] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ zone?: string; area?: string }>({});

  const [zoneOpen, setZoneOpen] = useState(false);
  const [areaOpen, setAreaOpen] = useState(false);

  const router = useRouter();

  const validateForm = () => {
    const newErrors: { zone?: string; area?: string } = {};

    if (!zone) {
      newErrors.zone = "Veuillez sélectionner votre zone";
    }

    if (!area) {
      newErrors.area = "Veuillez sélectionner votre type de zone";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    // Validation
    if (!validateForm()) {
      Alert.alert(
        "Informations manquantes",
        "Veuillez sélectionner votre zone et votre type de zone avant de continuer.",
        [{ text: "OK" }],
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'envoi des données
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Navigation vers la page login
      router.replace("/(auth)/login");
    } catch (error) {
      Alert.alert("Erreur", "Une erreur est survenue. Veuillez réessayer.", [
        { text: "OK" },
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonctions pour gérer la sélection avec reset des erreurs
  const handleZoneSelect = (selectedZone: string) => {
    setZone(selectedZone);
    if (errors.zone) {
      setErrors((prev) => ({ ...prev, zone: undefined }));
    }
  };

  const handleAreaSelect = (selectedArea: string) => {
    setArea(selectedArea);
    if (errors.area) {
      setErrors((prev) => ({ ...prev, area: undefined }));
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex flex-1 flex-col gap-6 px-6 pt-10">
        <TouchableOpacity
          onPress={() => router.back()}
          accessible={true}
          accessibilityLabel="Retour"
          accessibilityRole="button"
          accessibilityHint="Retourne à l'écran précédent"
          className="bg-transparent"
          disabled={isSubmitting}
        >
          <Image
            source={require("../../assets/images/back-icon.png")}
            className=""
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View className="flex flex-col items-center justify-center gap-10 text-center">
          <Image
            source={require("../../assets/images/location-image.png")}
            className=""
            resizeMode="cover"
            accessible={false}
          />

          <View className="flex flex-col items-center justify-center gap-4 text-center">
            <Text className="font-gilroy-semibold text-[26px] font-semibold leading-7 text-neutral900">
              Select Your Location
            </Text>

            <Text className="text-center font-gilroy-medium text-base font-medium leading-4 text-neutral600">
              Switch on your location to stay in tune with what&apos;s happening
              in your area
            </Text>
          </View>
        </View>

        <View className="mt-14 gap-6">
          <View>
            <SelectField
              label="Your zone"
              value={zone}
              placeholder="Banassree"
              onPress={() => setZoneOpen(true)}
            />

            {errors.zone && (
              <Text className="font-gilroy-regular mt-1.5 text-sm text-red-600">
                {errors.zone}
              </Text>
            )}
          </View>

          <View>
            <SelectField
              label="Your area"
              value={area}
              placeholder="Types of your area"
              onPress={() => setAreaOpen(true)}
            />

            {errors.area && (
              <Text className="font-gilroy-regular mt-1.5 text-sm text-red-600">
                {errors.area}
              </Text>
            )}
          </View>

          <AppButton
            onPress={handleSubmit}
            style={{ marginTop: 20 }}
            loading={isSubmitting}
            disabled={isSubmitting}
            accessibilityLabel={
              !zone || !area
                ? "Veuillez sélectionner la zone et le type de zone"
                : "Soumettre la localisation"
            }
          >
            <Text className="font-gilroy-semibold text-base font-semibold text-white">
              Submit
            </Text>
          </AppButton>
        </View>
      </View>

      <SelectModal
        visible={zoneOpen}
        title="Select your zone"
        data={["Banassree", "Gulshan", "Dhanmondi"]}
        onSelect={handleZoneSelect}
        onClose={() => setZoneOpen(false)}
      />

      <SelectModal
        visible={areaOpen}
        title="Types of your area"
        data={["Residential", "Commercial", "Mixed"]}
        onSelect={handleAreaSelect}
        onClose={() => setAreaOpen(false)}
      />
    </ScreenWrapper>
  );
};

export default Location;
