import React from "react"
import { View } from "react-native"
import Touchable from "react-native-platform-touchable"

export default class extends Touchable {
  render() {
    const { children, ...props } = this.props

    return (
      <Touchable {...props}>
        <View>{children}</View>
      </Touchable>
    )
  }
}
