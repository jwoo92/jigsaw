/* @flow */

import * as React from "react"
import { View, Image, Text } from "react-native"
import { withTheme } from "../core/theming"
import IconButton from "./IconButton"
import Config from "./Config"
import type { Theme } from "../types"

type Props = {
  value: number,
  onChange: number => void,
  style?: any,
  theme: Theme
}

class Stepper extends React.Component<Props> {
  static defaultProps = {
    value: 0
  }

  handleMinus = () => {
    const { value, onChange } = this.props

    if (value > 0) {
      onChange(value - 1)
    }
  }

  handlePlus = () => {
    const { value, onChange } = this.props

    onChange(value + 1)
  }

  render() {
    const {
      value,
      theme: { colors, spacing, typography },
      style
    } = this.props

    return (
      <View style={[{ flexDirection: "row" }, style]}>
        <IconButton
          icon="MaterialIcons/remove"
          onPress={this.handleMinus}
          size={Config.stepperButtonSize}
          color={colors.strong}
          disabled={value === 0}
        />
        <Text
          style={[
            typography.body1,
            {
              textAlign: "center",
              alignSelf: "center",
              color: colors.medium,
              marginHorizontal: spacing.medium
            }
          ]}>
          {value}
        </Text>
        <IconButton
          icon="MaterialIcons/add"
          onPress={this.handlePlus}
          size={Config.stepperButtonSize}
          color={colors.strong}
        />
      </View>
    )
  }
}

export default withTheme(Stepper)
