import React from "react";
import { Text, PressableProps, Pressable } from "react-native";

interface CustomButtonProps extends PressableProps {
  title: string;
  color: "primary" | "secondary" | "tertiary";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  onLongPress,
  color,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded-md active:opacity-80
        ${color === "primary" && "bg-primary"}
        ${color === "secondary" && "bg-secondary-default"}
        ${color === "tertiary" && "bg-tertiary"}
        `}
    >
      <Text className="text-white text-center">{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
