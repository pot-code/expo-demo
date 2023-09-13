import { useCallback, useMemo, useState } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import colors from "../../constants/colors"
import components from "../../constants/components"
import sizes from "../../constants/sizes"

type RatioButtonProps = {
  value: string
  selected: boolean
  children: React.ReactNode
  onPress: (value: string) => void
}

function RatioButton({ children, value, selected, onPress }: RatioButtonProps) {
  const handlePress = useCallback(() => {
    onPress(value)
  }, [])

  return (
    <Pressable style={[components.card.default, styles.card, selected && styles.selectedRatio]} onPressIn={handlePress}>
      {children}
    </Pressable>
  )
}

export default function Ratio() {
  const selections = useMemo(() => ["16:9", "5:7", "1:1", "Free"], [])
  const [selection, setSelection] = useState(selections[0])

  const onPress = useCallback((value: string) => {
    setSelection(value)
  }, [])

  return (
    <View style={{ flexDirection: "row", gap: sizes.spacing.default }}>
      <View style={[components.card.default, styles.card, selection === "default" && styles.selectedRatio]}>
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
      {selections.map((value) => (
        <RatioButton key={value} selected={value === selection} value={value} onPress={onPress}>
          <Text style={[styles.text, selection === value && styles.selectedTextColor]}>{value}</Text>
        </RatioButton>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: sizes.spacing.xs,
  },
  text: {
    fontSize: sizes.font.md,
  },
  selectedRatio: {
    backgroundColor: colors.brand["900"],
    borderColor: colors.brand["600"],
  },
  selectedTextColor: {
    color: colors.brand.default,
  },
})
