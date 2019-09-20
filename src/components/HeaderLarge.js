/* @flow */

import * as React from "react"
import { withTheme } from "../core/theming"
import Header from "./Header"
import type { Theme, Color, TypeStyle } from "../types"

type Props = {
  title: string,
  buttonText: string,
  icon: string,
  onPress: () => void,
  theme: Theme,
  style?: any
}

class HeaderLarge extends React.Component<Props> {
  static defaultProps = {
    onPress: () => {}
  }

  render() {
    const {
      title,
      buttonText,
      icon,
      onPress,
      style,
      theme: { colors, typography }
    } = this.props

    return (
      <Header
        titleTypeStyle={typography.headline4}
        titleColor={colors.strong}
        title={title}
        buttonText={buttonText}
        icon={icon}
        onPress={onPress}
        style={style}
      />
    )
  }
}

export default withTheme(HeaderLarge)
