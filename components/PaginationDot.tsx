import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const PaginationDot = ({
  index,
  scrollX,
  windowWidth,
}: {
  index: number;
  scrollX: any;
  windowWidth: number;
}) => {
  const dotStyle = useAnimatedStyle(() => {
    const width = interpolate(
      scrollX.value,
      [
        (index - 1) * (windowWidth - 40),
        index * (windowWidth - 40),
        (index + 1) * (windowWidth - 40),
      ],
      [5, 16, 5],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      scrollX.value,
      [
        (index - 1) * (windowWidth - 40),
        index * (windowWidth - 40),
        (index + 1) * (windowWidth - 40),
      ],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    );
    return { width, opacity };
  });

  return (
    <Animated.View
      style={dotStyle}
      className="h-[5px] rounded-full bg-primary"
    />
  );
};

export default PaginationDot;
