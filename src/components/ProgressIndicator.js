import * as React from "react"
import StepIndicator from "react-native-step-indicator"
import { withTheme } from "../core/theming"

const ProgressIndicator = ({
  numberOfSteps,
  currentStep,
  currentStepStrokeWidth,
  stepStrokeCurrentColor,
  stepIndicatorSize,
  currentStepIndicatorSize,
  stepIndicatorCurrentColor,
  stepIndicatorLabelCurrentColor,
  stepIndicatorLabelFontSize,
  stepNumberFinishedColor,
  stepNumberUnfinishedColor,
  unfinishedColor,
  finishedColor,
  theme
}) => {
  const currentPosition = currentStep - 1
  return (
    <StepIndicator
      stepCount={numberOfSteps}
      currentPosition={currentPosition}
      customStyles={{
        stepIndicatorSize,
        currentStepIndicatorSize: currentStepIndicatorSize
          ? currentStepIndicatorSize
          : stepIndicatorSize,
        stepStrokeFinishedColor: finishedColor,
        stepStrokeUnFinishedColor: unfinishedColor,
        separatorFinishedColor: finishedColor,
        separatorUnFinishedColor: unfinishedColor,
        stepIndicatorFinishedColor: finishedColor,
        stepIndicatorUnFinishedColor: unfinishedColor,
        currentStepStrokeWidth,
        stepStrokeCurrentColor: stepStrokeCurrentColor
          ? stepStrokeCurrentColor
          : stepIndicatorCurrentColor,
        stepIndicatorLabelUnFinishedColor: stepNumberUnfinishedColor,
        stepIndicatorLabelFinishedColor: stepNumberFinishedColor,
        stepIndicatorCurrentColor: stepIndicatorCurrentColor
          ? stepIndicatorCurrentColor
          : unfinishedColor,
        stepIndicatorLabelCurrentColor: stepIndicatorLabelCurrentColor
          ? stepIndicatorLabelCurrentColor
          : stepNumberFinishedColor,
        stepIndicatorLabelFontSize,
        labelFontFamily: theme.typography.default
      }}
    />
  )
}

export default withTheme(ProgressIndicator)
