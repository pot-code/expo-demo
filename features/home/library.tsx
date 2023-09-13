import { StyleSheet, View } from "react-native"
import components from "../../constants/components"
import { Text } from "../../components/themed"

export default function Library() {
  return (
    <View style={[components.card.default, styles.container]}>
      <Text>Color library</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
