import React from "react";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "@/components/shared/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.5)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        headerShown: false,
        sceneStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="person-circle-outline" />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Schedule",
          title: "Calendario",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="calendar-outline" />
          ),
        }}
      />
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Options",
          title: "Options",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="options-outline" />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
