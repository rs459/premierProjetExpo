import { Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Human from "../components/Human/Human";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Human firstName="John" name="Doe" age={30}>
          <Image
            source={{
              uri: "https://www.assuropoil.fr/wp-content/uploads/berger-australien.jpg",
            }}
            style={{ width: 200, height: 200 }}
          />
        </Human>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
