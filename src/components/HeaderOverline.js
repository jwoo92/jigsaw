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

class HeaderOverline extends React.Component<Props> {
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
      theme: { colors, spacing, typography }
    } = this.props

    return (
      <Header
        titleTypeStyle={typography.overline}
        titleColor={colors.light}
        title={title && title.toUpperCase()}
        buttonText={buttonText}
        icon={icon}
        dividerTopMargin={spacing.medium}
        onPress={onPress}
        style={style}
      />
    )
  }
}

export default withTheme(HeaderOverline)
