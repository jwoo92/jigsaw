import React from "react"
import { View, Text } from "react-native"
import MapView from "react-native-maps"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"

export type MapSimpleProps = {
  aspectRatio?: number,
  initialLatitude: number,
  initialLongitude: number,
  initialLatitudeDelta: number,
  initialLongitudeDelta: number,
  markers?: Array<{
    title?: string,
    description?: string,
    latitude: number,
    longitude: number
  }>,
  style: any,
  theme: Theme
}

class MapSimple extends React.PureComponent<MapSimpleProps> {
  static defaultProps = {
    aspectRatio: 1,
    markers: []
  }

  render() {
    const {
      aspectRatio,
      initialLatitude,
      initialLongitude,
      initialLatitudeDelta,
      initialLongitudeDelta,
      markers,
      style,
      theme: { borderRadius, colors }
    } = this.props

    return (
      <MapView
        initialRegion={{
          latitude: initialLatitude,
          longitude: initialLongitude,
          latitudeDelta: initialLatitudeDelta,
          longitudeDelta: initialLongitudeDelta
        }}
        style={[
          {
            width: "100%",
            aspectRatio
          },
          style
        ]}>
        {markers.map((m, i) => (
          <MapView.Marker
            coordinate={{
              latitude: m.latitude,
              longitude: m.longitude
            }}
            title={m.title}
            description={m.description}
            pinColor={colors.primary}
            key={i}
          />
        ))}
      </MapView>
    )
  }
}

export default withTheme(MapSimple)
