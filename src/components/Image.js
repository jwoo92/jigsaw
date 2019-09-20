// @flow
import React from "react"
import { Image as NativeImage } from "react-native"
import Config from "./Config"

export type Props = {
  source: string,
  resizeMode: string
}

export default class Image extends React.PureComponent<Props> {
  static defaultProps = {
    source: Config.placeholderImageURL,
    resizeMode: "cover"
  }

  render() {
    const { source, ...props } = this.props
    return <NativeImage source={typeof source === "string" ? { uri: source } : source} {...props} />
  }
}
