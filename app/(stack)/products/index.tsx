import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

const Products = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="text-base">{item.description}</Text>
            <View className="flex flex-row justify-between">
              <Text className="font-work-black">{item.price}</Text>
              <Link href={`/(stack)/products/${item.id}`}>
                <Text className="text-blue-500">Ver detalles </Text>
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Products;
