import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950 p-5">
      <Text className="font-pregular text-6xl text-slate-100 pb-2">Aora!</Text>
      <Text className="font-plight text-lg text-slate-100 text-center">
        Welcome to Aora! The best video sharing App
      </Text>
      <Link href="/home" style={{ color: "white" }}>
        Home
      </Link>
    </View>
  );
};

export default Home;
