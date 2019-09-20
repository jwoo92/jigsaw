import * as React from "react"
import { View, Image } from "react-native"
import { withTheme } from "../core/theming"
import Elevation from "./Elevation"
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  BORDER_RADIUS_MODE,
  ELEVATION_TYPE

class Container extends React.Component {
  render() {
    const {
      theme: { spacing },
      useThemeGutterPadding,
      borderColor,
      borderWidth,
      backgroundColor,
      backgroundImage,
      backgroundImageResizeMode,
      elevation,
      style,
      children
    } = this.props

    const containerStyle = {
      paddingHorizontal: useThemeGutterPadding ? spacing.gutters : 0,
      backgroundColor,
      borderColor,
      borderWidth,
      width: "100%"
    }

    const Wrap = elevation ? Elevation : View

    if (elevation) {
      containerStyle.elevation = elevation
    }

    return (
      <Wrap style={[containerStyle, style]}>
        <React.Fragment>
          {backgroundImage ? (
            <Image
              source={
                typeof backgroundImage === "string" ? { uri: backgroundImage } : backgroundImage
              }
              resizeMode={backgroundImageResizeMode}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }}
            />
          ) : null}
          {children}
        </React.Fragment>
      </Wrap>
    )
  }
}

export default withTheme(Container)
