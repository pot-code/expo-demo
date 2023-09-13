import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import colors from "../../constants/colors"
import components from "../../constants/components"
import sizes from "../../constants/sizes"

export default function Radius() {
  return (
    <View style={[components.card.default, styles.container]}>
      <View>
        <MaterialCommunityIcons name="rounded-corner" color={colors.text.default} size={sizes.font.lg} />
      </View>
      <View style={styles.footer}>
        <Text style={{ fontWeight: "bold" }}>Radius</Text>
        <Text style={{ color: colors.text.gray, fontSize: sizes.font.xxl, fontFamily: "Mono", fontWeight: "bold" }}>
          00
        </Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
})
