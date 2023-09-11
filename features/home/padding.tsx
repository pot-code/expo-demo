import { AntDesign } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import colors from "../../constants/colors"
import components from "../../constants/components"
import sizes from "../../constants/sizes"

export default function Padding() {
  return (
    <View style={[components.card, styles.container]}>
      <View>
        <AntDesign name="arrowsalt" color={colors.text.default} size={sizes.font.lg} />
      </View>
      <View style={styles.footer}>
        <Text style={{ fontWeight: "bold" }}>Padding</Text>
        <Text style={{ fontSize: sizes.font.xxl, fontWeight: "bold" }}>8</Text>
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
