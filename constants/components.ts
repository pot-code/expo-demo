import { StyleSheet } from "react-native"
import colors from "./colors"
import sizes from "./sizes"

export default StyleSheet.create({
  card: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#202020",
    borderRadius: sizes.radius.default,
    borderColor: colors.border,
    padding: sizes.spacing.md,
  },
})
