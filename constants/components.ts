import { StyleSheet } from "react-native"
import colors from "./colors"
import sizes from "./sizes"

const card = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#202020",
    borderRadius: sizes.radius.default,
    borderColor: colors.border,
    padding: sizes.spacing.md,
  },
})

const button = StyleSheet.create({
  default: {
    backgroundColor: colors.brand.default,
  },
  pressed: {
    backgroundColor: colors.brand["500"],
  },
})

export default {
  card,
  button,
}
