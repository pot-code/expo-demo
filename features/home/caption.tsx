import { StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import components from "../../constants/components"
import sizes from "../../constants/sizes"

export default function Caption() {
  return (
    <View style={[components.card, styles.container]}>
      <View>
        <Text>CC</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontWeight: "bold" }}>Caption</Text>
        <Text style={{ fontSize: sizes.font.xxl, fontWeight: "bold" }}>ON</Text>
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
