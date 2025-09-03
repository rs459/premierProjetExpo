import { Child } from "@/components/Child/Child";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Alert, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  function hello(name: string) {
    Alert.alert("Hello " + name);
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image source={require("@/assets/images/partial-react-logo.png")} />
      }
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">React Native Callbacks</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Child onPress={hello} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
