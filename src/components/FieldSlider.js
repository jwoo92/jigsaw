/* @flow */

import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"
import Slider from "./Slider"

type Props = {
  title?: string,
  minimumLabel?: string,
  maximumLabel?: string,
  disabled?: boolean,
  maximumValue?: number,
  minimumValue?: number,
  step?: number,
  onValueChange: () => void,
  value: number,
  style?: any,
  /**
   * @optional
   */
  theme: Theme
}

class FieldSlider extends React.Component {
  render() {
    const { title, minimumLabel, maximumLabel, style, theme, ...props } = this.props
    const { colors, typography, spacing } = theme

    const labelStyle = [typography.caption, { color: colors.light }]

    return (
      <View style={[styles.container, style]}>
        {title && (
          <Text style={[typography.body1, { marginBottom: spacing.text / 2 }]}>{title}</Text>
        )}
        <Slider
          style={{
            width: style && style.width,
            height: style && style.height
          }}
          {...props}
        />
        <View style={[styles.bottomContainer, { marginTop: spacing.text }]}>
          <Text style={[labelStyle, { flex: 1 }]}>{minimumLabel}</Text>
          <Text style={labelStyle}>{this.props.value}</Text>
          <Text style={[labelStyle, { flex: 1, textAlign: "right" }]}>{maximumLabel}</Text>
        </View>
      </View>
    )
  }
}

export default withTheme(FieldSlider)

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
