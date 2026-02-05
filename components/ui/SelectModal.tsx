import React from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";

type SelectModalProps = {
  visible: boolean;
  title: string;
  data: string[];
  onSelect: (value: string) => void;
  onClose: () => void;
};

const SelectModal = ({
  visible,
  title,
  data,
  onSelect,
  onClose,
}: SelectModalProps) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 justify-end bg-black/40">
        <View className="rounded-t-3xl bg-white p-6">
          <Text className="mb-4 text-center font-gilroy-semibold text-lg">
            {title}
          </Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="py-4"
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text className="text-center font-gilroy-medium text-base text-neutral900">
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity onPress={onClose} className="mt-4">
            <Text className="text-center font-gilroy-medium text-red-700">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SelectModal;
