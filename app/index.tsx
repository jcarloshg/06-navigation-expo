import { Redirect } from "expo-router";
import React from "react";

const App: React.FC = () => {
  // return <Redirect href="/(stack)/home" />;
  return <Redirect href="/tabs" />;
};

export default App;

// return (
//   <SafeAreaView>
//     <View className="mt-10">
//       <Text className="text-3xl" style={{ fontFamily: "WorkSans-Black" }}>
//         Hello, World!
//       </Text>
//       <Text className="text-3xl" style={{ fontFamily: "WorkSans-Medium" }}>
//         Hello, World!
//       </Text>
//       <Text className="text-3xl" style={{ fontFamily: "WorkSans-Light" }}>
//         Hello, World!
//       </Text>

//       <View className="mt-40"></View>

//       <Text className="text-3xl text-primary font-work-black">
//         Hello, World!
//       </Text>
//       <Text className="text-3xl text-secondary-200 font-work-medium">
//         Hello, World!
//       </Text>
//       <Text className="text-3xl text-tertiary font-work-light">
//         Hello, World!
//       </Text>
//     </View>

//     <View className="mt-40"></View>

//     <Link href="/products">Go to products</Link>
//   </SafeAreaView>
// );
