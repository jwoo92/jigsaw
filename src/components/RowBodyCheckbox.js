/* @flow */
import * as React from "react"
import { withTheme } from "../core/theming"
import Row from "./Row"
import Checkbox from "./Checkbox"
import Config from "./Config"
import type { Theme } from "../types"

type Props = {
  title: string,
  subtitle?: string,
  style?: any,
  theme: Theme,
  status: "checked" | "unchecked" | "indeterminate",
  color?: string,
  onPress?: () => mixed
}

class RowBodyCheckbox extends React.Component<Props> {
  render() {
    const {
      title,
      subtitle,
      style,
      status,
      onPress,
      color,
      theme: { colors, typography }
    } = this.props

    return (
      <Row
        titleTypeStyle={typography.body1}
        titleColor={colors.medium}
        subtitleTypeStyle={typography.subtitle2}
        subtitleColor={colors.light}
        title={title}
        subtitle={subtitle}
        right={() => (
          <Checkbox
            status={status}
            size={Config.rowSingleLineIconSize}
            color={color}
            onPress={onPress}
          />
        )}
        style={style}
      />
    )
  }
}

export default withTheme(RowBodyCheckbox)
