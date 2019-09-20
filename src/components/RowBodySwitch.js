/* @flow */

import * as React from "react"
import { withTheme } from "../core/theming"
import Row from "./Row"
import Switch from "./Switch"
import type { Theme } from "../types"

type Props = {
  title: string,
  subtitle?: string,
  style?: any,
  theme: Theme,
  value?: boolean,
  color?: string,
  onValueChange?: Function
}

class RowBodySwitch extends React.Component<Props> {
  render() {
    const {
      title,
      subtitle,
      style,
      value,
      onValueChange,
      color,
      theme: { colors, typography, spacing }
    } = this.props

    return (
      <Row
        titleTypeStyle={typography.body1}
        titleColor={colors.medium}
        subtitleTypeStyle={typography.subtitle2}
        subtitleColor={colors.light}
        title={title}
        subtitle={subtitle}
        right={() => <Switch value={value} color={color} onValueChange={onValueChange} />}
        style={style}
      />
    )
  }
}

export default withTheme(RowBodySwitch)
