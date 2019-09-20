/* @flow */

import * as React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { withTheme } from "../core/theming"
import Icon from "./Icon"
import Config from "./Config"
import type { Theme } from "../types"

type Props = {
  icon: string,
  placeholder?: string,
  onSubmit: (text: string) => void,
  theme: Theme,
  style?: any
}

class FieldSearchBarFull extends React.Component<Props> {
  state = {
    focused: false
  }

  static defaultProps = {
    icon: "search"
  }

  clearText = () => {
    this.setState({ value: "" })
  }

  onBlur = () => {
    this.setState({ focused: false })
  }

  onChange = value => {
    this.props.onChange && this.props.onChange(value)
  }

  onFocus = () => {
    this.setState({ focused: true })
  }

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit()
  }

  render() {
    const {
      icon,
      placeholder,
      onSubmit,
      style,
      theme: { colors, spacing, typography },
      onChange,
      value
    } = this.props

    const { focused } = this.state

    const { lineHeight, ...typeStyle } = typography.body2

    return (
      <View style={[{ padding: spacing.large }, styles.container, style]}>
        <Icon
          name={icon}
          size={Config.fieldSearchBarFullIconSize}
          color={focused ? colors.primary : colors.light}
        />
        <TextInput
          clearButtonMode="while-editing"
          placeholder={placeholder}
          value={value}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={onChange}
          onSubmitEditing={this.onSubmit}
          placeholderTextColor={colors.light}
          style={[
            typeStyle,
            {
              color: colors.medium,
              marginLeft: spacing.medium,
              flex: 1,
              justifyContent: "center"
            }
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
})

export default withTheme(FieldSearchBarFull)
