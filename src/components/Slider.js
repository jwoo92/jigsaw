import * as React from "react"
import { default as ReactNativeSlider } from "react-native-slider"
import { withTheme } from "../core/theming"

const Slider = ({
  style,
  value,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor,
  disabledThumbTintColor,
  minimumValue,
  maximumValue,
  thumbTouchSize,
  step,
  disabled,
  onValueChange,
  theme,
  trackBorderRadius,
  thumbBorderRadius,
  thumbSize,
  ...props
}) => {
  const thumbStyle = {
    borderRadius: thumbBorderRadius || 0,
    width: thumbSize || (style && style.height ? style.height * 0.4 : null),
    height: thumbSize || (style && style.width ? style.width * 0.1 : null)
  }

  return (
    <ReactNativeSlider
      {...props}
      disabled={disabled}
      value={disabled ? 0 : value}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={minimumTrackTintColor}
      maximumTrackTintColor={maximumTrackTintColor}
      thumbTintColor={disabled && disabledThumbTintColor ? disabledThumbTintColor : thumbTintColor}
      thumbTouchSize={{ width: thumbTouchSize || 0, height: thumbTouchSize || 0 }}
      onValueChange={onValueChange}
      trackStyle={{
        borderRadius: trackBorderRadius ? trackBorderRadius : 0,
        width: style ? style.width : "100%",
        height: style ? style.height : null
      }}
      thumbStyle={thumbStyle}
      style={disabled ? [style, { opacity: 0.6 }] : style}
      step={step}
    />
  )
}

export default withTheme(Slider)
