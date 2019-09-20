/* @flow */

import * as React from "react"
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  DatePickerIOS,
  DatePickerAndroid,
  TimePickerAndroid
} from "react-native"
import dateFormat from "dateformat"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"
import Portal from "./Portal/Portal"
import Button from "./Button"
import TextField from "./TextField"
import Touchable from "./Touchable"

type Props = {
  /**
   * Type of the Picker.
   * - `underline` - input with an underline.
   * - `solid` - input with an outline.
   *
   * In `solid` type, the background color of the label is derived from `colors.background` in theme or the `backgroundColor` style.
   */
  type?: "underline" | "solid",
  /**
   * Uses dateFormat library to format your date / time
   */
  format?: string,
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled?: boolean,
  /**
   * The text to use for the floating label.
   */
  label?: string,
  /**
   * Whether to style the Picker with error style.
   */
  error?: boolean,
  /**
   * Helper text to display below the input
   */
  assistiveText?: string,
  /**
   * The name of the icon to show on the left
   */
  leftIconName?: string,
  /**
   * Whether to display the left button inside or outside of the Picker
   */
  leftIconMode?: "inset" | "outset",
  /**
   * The name of the icon to show on the right
   */
  rightIconName?: string,
  options: Array<{ label: string, value: string }>,
  date: Date,
  onDateChange: (date: Date) => void,
  style?: any,
  theme: Theme
}

class Picker extends React.Component<Props> {
  static defaultProps = {
    type: "underline",
    mode: "date",
    disabled: false,
    error: false,
    date: new Date(),
    onDateChange: () => {}
  }

  state = {
    pickerVisible: false
  }

  constructor(props) {
    super(props)
    this.textField = React.createRef()
  }

  formatDate = () => {
    const { date, mode, format } = this.props

    if (format) return dateFormat(date, format)

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    if (mode === "time") {
      return `${date.toLocaleTimeString()}`
    }

    if (mode === "datetime") {
      return `${date.toLocaleString()}`
    }

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  toggleVisibility = async () => {
    const { date, mode, onDateChange } = this.props

    if (Platform.OS === "ios") {
      this.setState(prevState => ({ pickerVisible: !prevState.pickerVisible }))
    } else {
      try {
        if (mode === "date") {
          const { action, year, month, day } = await DatePickerAndroid.open({
            date
          })

          if (action !== DatePickerAndroid.dismissedAction) {
            return onDateChange(new Date(year, month, day))
          }
        }

        if (mode === "time") {
          const { action, hour, minute } = await TimePickerAndroid.open({ mode: "default" })

          if (action !== DatePickerAndroid.dismissedAction) {
            const time = new Date()
            time.setHours(hour)
            time.setMinutes(minute)
            time.setSeconds(0)
            onDateChange(time)
          }
        }
      } catch ({ code, message }) {
        console.warn("Cannot open date picker", message)
      }
    }

    this.textField.current.toggleFocus()
  }

  render() {
    const {
      style,
      theme,
      options,
      initialDate,
      locale,
      minuteInterval,
      timeZoneOffsetInMinutes,
      date,
      onDateChange,
      disabled,
      mode,
      ...props
    } = this.props
    const { colors, spacing } = theme

    const { pickerVisible } = this.state

    return (
      <View style={[styles.container, style]}>
        <Touchable disabled={disabled} onPress={this.toggleVisibility}>
          <View pointerEvents="none">
            <TextField
              {...props}
              value={this.formatDate(date)}
              ref={this.textField}
              disabled={disabled}
            />
          </View>
        </Touchable>
        {pickerVisible && (
          <Portal>
            <View
              style={[
                styles.picker,
                {
                  backgroundColor: colors.divider
                }
              ]}>
              <SafeAreaView style={styles.pickerContainer}>
                <Button type="text" onPress={this.toggleVisibility} style={styles.closeButton}>
                  Close
                </Button>
                <DatePickerIOS date={date} onDateChange={onDateChange} mode={mode} />
              </SafeAreaView>
            </View>
          </Portal>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  picker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  pickerContainer: { flexDirection: "column", width: "100%" },
  closeButton: {
    alignSelf: "flex-end"
  }
})

export default withTheme(Picker)
