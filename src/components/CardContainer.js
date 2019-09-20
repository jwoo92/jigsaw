import React from "react"
import { View, Text } from "react-native"
import color from "color"
import Image from "./Image"
import Card from "./Card"
import Elevation from "./Elevation"
import Icon from "./Icon"
import { withTheme } from "../core/theming"
import Config from "./Config"
import type { Theme } from "../types"

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1

export type CardContainerProps = {
  image: string | { uri: string },
  title?: string,
  leftDescription?: string,
  rightDescription?: string,
  textCentered?: boolean,
  icon?: string,
  aspectRatio?: number,
  elevation: number,
  numColumns: 2 | 3,
  theme: Theme,
  style: any,
  onPress: () => void
}

class CardContainer extends React.PureComponent<CardContainerProps> {
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
      textCentered,
      icon,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props

    let textJustification, titleStyle
    if (textCentered && !rightDescription) {
      textJustification = "center"
    } else {
      textJustification = "space-between"
    }

    switch (numColumns) {
      case 2:
        titleStyle = typography.headline6
        break
      case 3:
        titleStyle = typography.headline5
        break
    }

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
          <View
            style={{
              borderRadius: borderRadius.global,
              overflow: "hidden",
              backgroundColor: colors.surface
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
                    justifyContent: textJustification
                  }}>
                  <Text numberOfLines={1} style={[titleStyle, { color: colors.strong }]}>
                    {title}
                  </Text>
                </View>
              ) : null}
              {leftDescription ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: textJustification,
                    alignItems: "center",
                    marginTop: numColumns === 3 ? spacing.text : spacing.text / 2
                  }}>
                  <Text numberOfLines={1} style={[typography.body2, { color: colors.medium }]}>
                    {leftDescription}
                  </Text>
                  {rightDescription ? (
                    <Text numberOfLines={1} style={[typography.subtitle2, { color: colors.light }]}>
                      {rightDescription}
                    </Text>
                  ) : null}
                </View>
              ) : null}
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

export default withTheme(CardContainer)
