/* @flow */
import * as React from "react"
import { withTheme } from "../core/theming"
import { StyleSheet, View, Text } from "react-native"
import Touchable from "./Touchable"
import Checkbox from "./Checkbox"
import type { Theme } from "../types"
import color from "color"

type Props = {|
  title: string,
  style?: any,
  theme: Theme,
  status: "checked" | "unchecked" | "indeterminate",
  disabled?: boolean,
  color?: string,
  onPress?: () => mixed
|}

class FieldCheckbox extends React.Component<Props> {
  onPress = () => {
    const { onPress } = this.props
    if (onPress) {
      onPress()
    }
  }

  render() {
    const {
      title,
      status,
      onPress,
      color: checkboxColor,
      disabled,
      theme: { colors, typography, spacing, disabledOpacity }
    } = this.props

    let titleColor = status === "checked" ? colors.medium : colors.light

    if (disabled) {
      titleColor = color(titleColor)
        .alpha(disabledOpacity)
        .rgb()
        .string()
    }

    return (
      <Touchable onPress={this.onPress} disabled={disabled}>
        <View style={styles.container}>
          <Checkbox status={status} disabled={disabled} onPress={onPress} color={checkboxColor} />
          <Text style={[typography.body1, { marginLeft: spacing.medium, color: titleColor }]}>
            {title}
          </Text>
        </View>
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
})

export default withTheme(FieldCheckbox)
