import Slider from "@react-native-community/slider"
import { StyleSheet, View } from "react-native"
import { Text } from "../../components/themed"
import colors from "../../constants/colors"
import components from "../../constants/components"
import sizes from "../../constants/sizes"
import { useCallback, useState } from "react"

export default function Blocks() {
  const [value, setValue] = useState(1)

  const onSliderValueChange = useCallback((value: number) => {
    setValue(value)
  }, [])

  return (
    <View style={components.card.default}>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold" }}>Blocks</Text>
        <Text style={{ color: colors.text.gray }}>Max.20</Text>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: sizes.font.xxxl, fontFamily: "Mono", textAlign: "center" }}>{value}</Text>
      </View>
      <Slider
        style={{ height: 40 }}
        step={1}
        minimumValue={1}
        maximumValue={20}
        thumbTintColor={colors.brand.default}
        minimumTrackTintColor={colors.brand.default}
        maximumTrackTintColor={colors.text.gray}
        onValueChange={onSliderValueChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    padding: sizes.spacing.default,
  },
})
