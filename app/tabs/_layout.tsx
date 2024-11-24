import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons/";

const Home = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="heart-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Home;
