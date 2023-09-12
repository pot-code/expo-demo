import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import colors from "../../constants/colors"
import components from "../../constants/components"
import sizes from "../../constants/sizes"

export default function Ratio() {
  return (
    <View style={{ flexDirection: "row", gap: sizes.spacing.default }}>
      <View style={[components.card, styles.card]}>
        <View
          style={{
            width: "80%",
            aspectRatio: 5 / 3,
            borderRadius: sizes.radius.sm,
            borderColor: colors.text.default,
            borderWidth: 2,
          }}
        />
      </View>
      <View style={[components.card, styles.card]}>
        <Text style={styles.text}>16:9</Text>
      </View>
      <View style={[components.card, styles.card]}>
        <Text style={styles.text}>5:7</Text>
      </View>
      <View style={[components.card, styles.card]}>
        <Text style={styles.text}>1:1</Text>
      </View>
      <View style={[components.card, styles.card]}>
        <Text style={styles.text}>Free</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: sizes.font.md,
  },
})
