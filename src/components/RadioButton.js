/* @flow */

import * as React from "react"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"
import Config from "./Config"
import IconButton from "./IconButton"

type Props = {|
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
  theme: Theme
|}

class RadioButton extends React.Component<Props> {
  onPress = () => {
    const { onPress } = this.props

    if (onPress) {
      onPress()
    }
  }

  render() {
    const {
      selected,
      disabled,
      color,
      unselectedColor,
      onPress,
      theme: { colors }
    } = this.props

    return (
      <IconButton
        icon={
          selected ? "MaterialIcons/radio-button-checked" : "MaterialIcons/radio-button-unchecked"
        }
        color={selected ? color : unselectedColor}
        disabled={disabled}
        size={Config.radioButtonSize}
        onPress={this.onPress}
      />
    )
  }
}

export default withTheme(RadioButton)
