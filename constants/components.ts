import { StyleSheet } from "react-native"
import colors from "./colors"
import sizes from "./sizes"

export default StyleSheet.create({
  card: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: sizes.radius.default,
    backgroundColor: colors.background.component,
    borderColor: colors.border,
    padding: sizes.spacing.md,
  },
})
