import { StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import components from "../../constants/components"
import sizes from "../../constants/sizes"
import colors from "../../constants/colors"
import { FontAwesome } from "@expo/vector-icons"

// TODO: mono font
export default function RowNumber() {
  return (
    <View style={[components.card, styles.container]}>
      <View style={styles.counter}>
        <View style={styles.iconButton}>
          <FontAwesome name="minus" size={sizes.font.md} />
        </View>
        <Text style={{ fontSize: sizes.font.xxl, fontWeight: "bold" }}>7</Text>
        <View style={styles.iconButton}>
          <FontAwesome name="plus" size={sizes.font.md} />
        </View>
      </View>
      <Text>Rows</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizes.spacing.md,
    paddingVertical: sizes.spacing.default,
  },
  iconButton: {
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.brand.default,
    borderRadius: sizes.radius.default,
    padding: sizes.spacing.default,
    height: sizes.spacing.lg,
  },
})
