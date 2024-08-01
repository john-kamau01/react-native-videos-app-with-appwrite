import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-white font-psemibold mt-2">{title}</Text>
      <Text className="text-base text-gray-100 font-pregular text-center">
        {subtitle}
      </Text>

      <CustomButton
        title="Create Video"
        containerStyles="w-full my-6"
        handlePress={() => router.push("/create")}
      />
    </View>
  );
};

export default EmptyState;
