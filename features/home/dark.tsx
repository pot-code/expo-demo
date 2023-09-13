import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import components from "../../constants/components"
import sizes from "../../constants/sizes"
import colors from "../../constants/colors"

export default function DarkMode() {
  return (
    <View style={[components.card.default, styles.container]}>
      <View style={styles.iconContainer}>
        <Ionicons name="moon" size={sizes.font.xxl} color={colors.brand.default} style={styles.icon} />
      </View>
      <Text>Dark mode</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    padding: sizes.spacing.default,
    alignSelf: "center",
  },
  icon: {
    shadowColor: colors.brand.default,
    shadowOpacity: 0.5,
    shadowRadius: sizes.spacing.default,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
})
