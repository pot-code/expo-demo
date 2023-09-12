import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, View } from "react-native"

import { AntDesign } from "@expo/vector-icons"
import { Text } from "../components/themed"
import colors from "../constants/colors"
import sizes from "../constants/sizes"
import Blocks from "../features/home/blocks"
import Caption from "../features/home/caption"
import DarkMode from "../features/home/dark"
import Library from "../features/home/library"
import Padding from "../features/home/padding"
import Radius from "../features/home/radius"
import Ratio from "../features/home/ratio"
import RowNumber from "../features/home/rows"

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
      <ScrollView contentContainerStyle={styles.content}>
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
        <View style={styles.row}>
          <Library />
          <DarkMode />
        </View>
        <View style={styles.generate}>
          <Text style={{ color: colors.black, fontSize: sizes.font.lg, fontWeight: "600" }}>Generate</Text>
          <AntDesign name="retweet" size={sizes.font.lg} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: sizes.spacing.default,
    paddingBottom: sizes.spacing.lg,
    gap: sizes.spacing.default,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: "row",
    gap: sizes.spacing.default,
    height: 136,
  },
  generate: {
    flex: 1,
    minHeight: 64,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: sizes.radius.default,
    backgroundColor: colors.brand.default,
    gap: sizes.spacing.default,
  },
})
