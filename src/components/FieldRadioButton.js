/* @flow */

import * as React from "react"
import { View, Text } from "react-native"
import color from "color"
import { withTheme } from "../core/theming"
import Touchable from "./Touchable"
import RadioButton from "./RadioButton"
import type { Theme } from "../types"

type Props = {|
  /**
   * Title to display alongside radio button
   */
  title?: string,
  /**
   * Status of radio button
   */
  selected: boolean,
  /**
   * Whether the radio button is disabled.
   */
  disabled?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  /**
   * @optional
   */
  color?: string,
  /**
   * Color of the radio button
   */
  theme: Theme
|}

class FieldRadioButton extends React.Component<Props> {
  onPress = () => {
    const { onPress } = this.props

    if (onPress) {
      onPress()
    }
  }

  render() {
    const {
      title,
      selected,
      disabled,
      color,
      onPress,
      theme: { colors, typography, spacing, disabledOpacity }
    } = this.props

    let titleColor = selected ? colors.medium : colors.light

    if (disabled) {
      titleColor = color(titleColor)
        .alpha(disabledOpacity)
        .rgb()
        .string()
    }

    return (
      <Touchable onPress={this.onPress} disabled={disabled}>
        <View style={{ flexDirection: "row" }}>
          <RadioButton color={color} selected={selected} disabled={disabled} />
          <Text style={[typography.body1, { color: titleColor, marginLeft: spacing.medium }]}>
            {title}
          </Text>
        </View>
      </Touchable>
    )
  }
}

export default withTheme(FieldRadioButton)
