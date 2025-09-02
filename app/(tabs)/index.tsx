import Human from "@/components/Human/Human";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function HomeScreen() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Human />
      <Human />
      <ThemedText>Fin de l écran</ThemedText>
    </ThemedView>
  );
}
