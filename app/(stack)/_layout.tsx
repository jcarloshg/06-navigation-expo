import { Stack } from "expo-router";
import React from "react";

const Layout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Home" }} />
      <Stack.Screen name="profile/index" options={{ title: "Profile" }} />
      <Stack.Screen name="products/index" options={{ title: "Products" }} />
      <Stack.Screen name="settings/index" options={{ title: "Settings" }} />
    </Stack>
  );
};

export default Layout;
