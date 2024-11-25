import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-8 pt-8">
        <Text className="text-2xl font-bold">Welcome!</Text>

        <View className="flex flex-col gap-4 mt-10">
          <CustomButton
            title="Products"
            color="primary"
            onPress={() => {
              router.push("/products");
            }}
          />
          <CustomButton
            title="Profile"
            color="secondary"
            onPress={() => {
              router.push("/profile");
            }}
          />
          <CustomButton
            title="Settings"
            color="tertiary"
            onPress={() => {
              router.push("/settings");
            }}
          />
          <CustomButton
            title="Open menu"
            color="primary"
            onPress={() => {
              onToggleDrawer();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
