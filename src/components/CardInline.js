import React from "react"
import { View, Text } from "react-native"
import Image from "./Image"
import Card from "./Card"
import Elevation from "./Elevation"
import { withTheme } from "../core/theming"
import Config from "./Config"
import type { Theme } from "../types"

export type CardInlineProps = {
  image: string | { uri: string },
  title?: string,
  description?: string,
  textCentered?: boolean,
  aspectRatio?: number,
  elevation: number,
  numColumns: 1 | 2 | 3,
  theme: Theme,
  style: any,
  onPress: () => void
}

class CardInline extends React.PureComponent<CardInlineProps> {
  static defaultProps = {
    image: Config.cardImageUrl,
    aspectRatio: 1.5,
    elevation: 2,
    numColumns: 3
  }

  render() {
    const {
      image,
      title,
      description,
      textCentered,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props

    let titleStyle, descriptionStyle
    switch (numColumns) {
      case 1:
        titleStyle = typography.headline6
        descriptionStyle = typography.subtitle2
        break
      case 2:
        titleStyle = typography.headline5
        descriptionStyle = typography.subtitle2
        break
      case 3:
        titleStyle = typography.headline4
        descriptionStyle = typography.subtitle1
        break
    }

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
          <Image
            style={{
              borderRadius: borderRadius.global,
              aspectRatio
            }}
            source={typeof image === "string" ? { uri: image } : image}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              alignItems: textCentered ? "center" : "flex-start",
              bottom: numColumns === 1 ? spacing.medium : spacing.large,
              left: spacing.large,
              right: spacing.large
            }}>
            {title ? (
              <Text numberOfLines={1} style={[titleStyle, { color: colors.strongInverse }]}>
                {title}
              </Text>
            ) : null}
            {description ? (
              <Text
                numberOfLines={1}
                style={[descriptionStyle, { color: colors.lightInverse, marginTop: spacing.text }]}>
                {description}
              </Text>
            ) : null}
          </View>
        </Elevation>
      </Card>
    )
  }
}

export default withTheme(CardInline)
