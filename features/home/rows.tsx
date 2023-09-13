import { Pressable, StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import components from "../../constants/components"
import sizes from "../../constants/sizes"
import colors from "../../constants/colors"
import { FontAwesome } from "@expo/vector-icons"
import { useCallback, useState } from "react"

function threshold(value: number) {
  return Math.max(1, Math.min(9, value))
}

export default function RowNumber() {
  const [value, setValue] = useState(1)

  const onIncrement = useCallback(() => {
    setValue((prev) => threshold(prev + 1))
  }, [])

  const onDecrement = useCallback(() => {
    setValue((prev) => threshold(prev - 1))
  }, [])

  return (
    <View style={[components.card.default, styles.container]}>
      <View style={styles.counter}>
        <Pressable
          style={({ pressed }) => [styles.iconButton, pressed ? components.button.pressed : components.button.default]}
          onPress={onDecrement}
        >
          <FontAwesome name="minus" size={sizes.font.md} />
        </Pressable>
        <Text style={{ fontSize: sizes.font.xxl, fontFamily: "Mono", fontWeight: "bold" }}>{value}</Text>
        <Pressable
          style={({ pressed }) => [styles.iconButton, pressed ? components.button.pressed : components.button.default]}
          onPress={onIncrement}
        >
          <FontAwesome name="plus" size={sizes.font.md} />
        </Pressable>
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
