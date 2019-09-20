import * as React from "react"
import { Platform, View } from "react-native"
import * as Progress from "react-native-progress"
import { withTheme } from "../core/theming"

const ProgressBar = ({
  progress,
  borderRadius,
  animationType,
  color,
  unfilledColor,
  borderColor,
  borderWidth,
  style
}) => {
  return (
    <View style={style}>
      <Progress.Bar
        progress={progress}
        color={color}
        unfilledColor={unfilledColor}
        borderColor={borderColor}
        borderWidth={borderWidth}
        width={style.width}
        height={style.height}
        borderRadius={borderRadius}
        animationType={animationType}
      />
    </View>
  )
}

export default withTheme(ProgressBar)
