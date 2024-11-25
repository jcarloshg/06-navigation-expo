import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import React from "react";

const Layout: React.FC = () => {
  const navigation = useNavigation();
  const onHeaderLeftClick = (canGoBack: boolean) => {
    console.log(`[canGoBack] -> `, canGoBack)
    if (canGoBack) {
      // navigation.dispatch(StackActions.pop(1));
      navigation.goBack();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "chevron-back" : "menu"}
            size={24}
            color="black"
            className="mr-4"
            onPress={() => onHeaderLeftClick(canGoBack ?? false)}
          />
        ),
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
