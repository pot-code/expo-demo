import { useCallback, useMemo, useState } from "react"
import { Pressable, PressableProps, StyleProp, StyleSheet, View } from "react-native"
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
    <Pressable style={[components.card, styles.card, selected && styles.selected]} onPressIn={handlePress}>
      {children}
    </Pressable>
  )
}

export default function Ratio() {
  const selections = useMemo(() => ["16:9", "5:7", "1:1", "Free"], [])
  const [selection, setSelection] = useState(selections[0])
  console.log("🚀 ~ file: ratio.tsx:29 ~ Ratio ~ selection:", selection)
  const onPress = useCallback((value: string) => {
    setSelection(value)
  }, [])
  const onDefaultRatioPress = useCallback(() => {
    setSelection("default")
  }, [])

  return (
    <View style={{ flexDirection: "row", gap: sizes.spacing.default }}>
      <Pressable
        style={[components.card, styles.card, selection === "default" && styles.selected]}
        onPress={onDefaultRatioPress}
      >
        <View
          style={{
            width: "80%",
            aspectRatio: 5 / 3,
            borderRadius: sizes.radius.sm,
            borderColor: colors.text.default,
            borderWidth: 2,
          }}
        />
      </Pressable>
      {selections.map((value) => (
        <RatioButton key={value} selected={value === selection} value={value} onPress={onPress}>
          <Text style={styles.text}>{value}</Text>
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
  },
  text: {
    fontSize: sizes.font.md,
  },
  selected: {
    borderColor: colors.brand.default,
  },
})
