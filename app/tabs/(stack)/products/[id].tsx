import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { products } from "@/store/products.store";


const Producto = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id === id);

  if (product === undefined) {
    return (
      <View className="flex flex-1 justify-center px-16 gap-2">
        <Text style={{ fontSize: 18 }}>Product not found</Text>
      </View>
    );
  }

  return (
    <View className="flex flex-1 justify-center px-16 gap-2">
      <Text className="font-work-black text-2xl">{product.title} </Text>
      <Text className="font-work-light text-base">{product.description} </Text>
      <Text className="font-work-black text-xs">{product.price} </Text>
    </View>
  );
};

export default Producto;
