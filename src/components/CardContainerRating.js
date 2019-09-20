import React from "react"
import { View, Text } from "react-native"
import color from "color"
import Image from "./Image"
import Card from "./Card"
import Elevation from "./Elevation"
import Icon from "./Icon"
import StarRating from "./StarRating"
import { withTheme } from "../core/theming"
import Config from "./Config"
import type { Theme } from "../types"

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1

export type CardContainerRatingProps = {
  image: string | { uri: string },
  title?: string,
  leftDescription?: string,
  rightDescription?: string,
  icon?: string,
  rating: number,
  aspectRatio?: number,
  elevation: number,
  numColumns: 2 | 3,
  theme: Theme,
  style: any,
  onPress: () => void
}

class CardContainerRating extends React.PureComponent<CardContainerRatingProps> {
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
      leftDescription,
      rightDescription,
      icon,
      rating,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props

    let titleStyle, rightDescriptionStyle
    switch (numColumns) {
      case 2:
        titleStyle = typography.headline6
        rightDescriptionStyle = typography.body2
        break
      case 3:
        titleStyle = typography.headline5
        rightDescriptionStyle = typography.caption
        break
    }

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
          <View
            style={{
              borderRadius: borderRadius.global,
              overflow: "hidden"
            }}>
            <Image
              style={{ aspectRatio }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="cover"
            />
            <View style={{ padding: spacing.large }}>
              {title ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                  <Text numberOfLines={1} style={[titleStyle, { color: colors.strong }]}>
                    {title}
                  </Text>
                </View>
              ) : null}
              {leftDescription ? (
                <Text
                  numberOfLines={1}
                  style={[
                    typography.body2,
                    {
                      color: colors.medium,
                      marginTop: numColumns === 3 ? spacing.text : spacing.text / 2
                    }
                  ]}>
                  {leftDescription}
                </Text>
              ) : null}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: numColumns === 3 ? spacing.large : spacing.medium
                }}>
                <StarRating rating={rating} />
                <Text
                  style={[
                    rightDescriptionStyle,
                    {
                      color: colors.medium,
                      marginLeft: spacing.small
                    }
                  ]}
                  numberOfLines={1}>
                  {rightDescription}
                </Text>
              </View>
            </View>
            {icon ? (
              <Elevation
                style={{
                  elevation: Config.cardIconElevation,
                  position: "absolute",
                  top: spacing.medium,
                  right: spacing.medium,
                  width: ICON_CONTAINER_SIZE,
                  height: ICON_CONTAINER_SIZE,
                  padding: ICON_CONTAINER_PADDING,
                  borderRadius: ICON_CONTAINER_SIZE,
                  backgroundColor: color(colors.strong)
                    .alpha(Config.cardIconBackgroundOpacity)
                    .rgb()
                    .string()
                }}>
                <Icon name={icon} size={Config.cardIconSize} color={colors.surface} />
              </Elevation>
            ) : null}
          </View>
        </Elevation>
      </Card>
    )
  }
}

export default withTheme(CardContainerRating)
