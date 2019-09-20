/* @flow */

import * as React from "react"
import { StyleSheet, View } from "react-native"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"

type Props = {
  style?: any,
  /**
   * @optional
   */
  theme: Theme
}

class Divider extends React.Component<Props> {
  render() {
    const {
      style,
      color,
      height,
      theme: { colors }
    } = this.props

    return (
      <View
        style={[
          { backgroundColor: color || colors.divider },
          style,
          { height: height || StyleSheet.hairlineWidth }
        ]}
      />
    )
  }
}

export default withTheme(Divider)
