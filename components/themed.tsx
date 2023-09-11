/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from "react-native"
import colors from "../constants/colors"
import sizes from "../constants/sizes"

export type TextProps = DefaultText["props"]
export type ViewProps = DefaultView["props"]

export function Text(props: TextProps) {
  const { style, ...otherProps } = props

  return <DefaultText style={[{ color: colors.text.default, fontSize: sizes.font.default }, style]} {...otherProps} />
}
