import { StyleSheet, View } from "react-native"

import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import colors from "../constants/colors"
import Blocks from "../features/home/blocks"
import Ratio from "../features/home/ratio"
import sizes from "../constants/sizes"
import RowNumber from "../features/home/rows"
import Caption from "../features/home/caption"
import Radius from "../features/home/radius"
import Padding from "../features/home/padding"

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Bento Boy",
          headerTitleStyle: { color: colors.text.default },
          headerBackground: () => <View style={styles.header} />,
        }}
      />
      <StatusBar style="light" />
      <Blocks />
      <Ratio />
      <View style={styles.row}>
        <RowNumber />
        <Caption />
      </View>
      <View style={styles.row}>
        <Radius />
        <Padding />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: sizes.spacing.default,
    flex: 1,
    padding: sizes.spacing.default,
    backgroundColor: colors.background.view,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.background.view,
  },
  row: {
    flexDirection: "row",
    gap: sizes.spacing.default,
    height: 136,
  },
})
