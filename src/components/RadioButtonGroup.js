/* @flow */

import * as React from "react"
import { withTheme } from "../core/theming"
import { View, Text, StyleSheet } from "react-native"
import Icon from "./Icon.js"
import Touchable from "./Touchable"

type Props = {
  style: object,
  direction: string,
  options: Array<{ id: number, icon: string, label: string }>,
  activeColor: string,
  inactiveColor: string,
  labelStyle: object,
  iconSize: number,
  contentColor: string,
  borderRadius: number,
  optionSpacing: number,
  borderColor: string,
  unselectedContentColor: string,
  theme: theme
}

class RadioButtonGroup extends React.Component<Props> {
  state = { selected: this.props.defaultSelection }

  onPress = selected => {
    const { controlled, onChange } = this.props
    if (onChange) {
      onChange(selected)
    }

    if (!controlled) {
      return this.setState({ selected })
    }
  }

  getSelected = () => {
    if (this.props.controlled) {
      return this.props.value
    }

    return this.state.selected
  }

  render() {
    const {
      style,
      direction,
      options,
      activeColor,
      inactiveColor,
      labelStyle,
      labelWrapperStyle,
      iconSize,
      contentColor,
      borderRadius,
      optionSpacing,
      borderColor,
      controlled,
      unselectedContentColor,
      theme: { colors, spacing, typography }
    } = this.props
    const marginHorizontal = direction === "horizontal" && optionSpacing ? optionSpacing / 2 : 0
    const marginVertical = direction === "vertical" && optionSpacing ? optionSpacing / 2 : 0
    const optionWrapperWidth = direction === "vertical" ? "100%" : "auto"

    return (
      <View
        style={[
          style,
          {
            flexDirection: direction === "vertical" ? "column" : "row",
            alignItems: "center",
            borderRadius: optionSpacing ? 0 : borderRadius,
            overflow: "hidden"
          }
        ]}>
        {options.map((option, index) => {
          const selected = option.label == this.getSelected()
          return (
            <Touchable
              style={{ width: optionWrapperWidth }}
              onPress={() => this.onPress(option.label)}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: selected ? activeColor : inactiveColor,
                  borderLeftWidth: borderColor && index !== 0 ? StyleSheet.hairlineWidth : 0,
                  borderRightWidth:
                    borderColor && index !== options.length - 1 ? StyleSheet.hairlineWidth : 0,
                  borderColor,
                  borderRadius: optionSpacing ? borderRadius : 0,
                  marginLeft: marginHorizontal,
                  marginRight: marginHorizontal,
                  marginTop: marginVertical,
                  marginBottom: marginVertical,
                  padding: spacing.large,
                  ...labelWrapperStyle
                }}>
                {option.icon ? (
                  <Icon name={option.icon} size={iconSize} color={contentColor} />
                ) : null}
                {option.label ? (
                  <Text
                    style={[
                      typography.button,
                      labelStyle,
                      { color: selected ? contentColor : unselectedContentColor }
                    ]}>
                    {option.label}
                  </Text>
                ) : null}
              </View>
            </Touchable>
          )
        })}
      </View>
    )
  }
}

export default withTheme(RadioButtonGroup)
