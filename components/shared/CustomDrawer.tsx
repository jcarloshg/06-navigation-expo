import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Text } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex justify-center items-center mx-3 p-8 h-40 rounded-xl bg-primary mb-10">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">JC</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
