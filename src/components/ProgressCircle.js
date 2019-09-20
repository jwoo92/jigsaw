import * as React from "react"
import { Platform } from "react-native"
import * as Progress from "react-native-progress"
import { withTheme } from "../core/theming"

const ProgressCircle = ({
  progress,
  style,
  color,
  size,
  showsText,
  direction,
  unfilledColor,
  borderColor,
  borderWidth,
  strokeCap,
  fill,
  textStyle,
  thickness
}) => {
  return (
    <Progress.Circle
      progress={progress}
      color={color}
      unfilledColor={unfilledColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      showsText={showsText}
      direction={direction}
      strokeCap={strokeCap}
      size={size}
      style={style}
      fill={fill}
      textStyle={textStyle}
      thickness={thickness}
    />
  )
}

export default withTheme(ProgressCircle)
