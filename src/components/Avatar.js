// @flow
import * as React from "react"
import { Image } from "react-native"
import Config from "./Config"
import type { IconSource } from "./Icon"

export type AvatarProps = {
  /**
   * Image source for the avatar
   */
  image: IconSource,
  /**
   * Size of avatar in width and height
   */
  size: number,
  style?: any
}

export default class Avatar extends React.PureComponent<AvatarProps> {
  static defaultProps = {
    image: Config.avatarImageUrl,
    size: Config.avatarImageSize
  }

  render() {
    const { image, size, style } = this.props
    const borderRadius = size / 2

    return (
      <Image
        style={[{ width: size, height: size, borderRadius }, style]}
        source={typeof image === "string" ? { uri: image } : image}
        resizeMode="cover"
      />
    )
  }
}
