import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View className="px-8 pt-8">
        <Text className="text-2xl font-bold">Welcome!</Text>

        <View className="flex flex-col gap-4 mt-10">
          <CustomButton
            title="Products"
            color="primary"
            onPress={() => {
              router.push("/tabs/(stack)/products");
            }}
          />
          <CustomButton
            title="Profile"
            color="secondary"
            onPress={() => {
              router.push("/tabs/(stack)/profile");
            }}
          />
          <CustomButton
            title="Settings"
            color="tertiary"
            onPress={() => {
              router.push("/tabs/(stack)/settings");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
