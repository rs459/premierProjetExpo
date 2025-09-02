import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "../../App.styles";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={s.container}>
          <View style={s.box}>
            <Text>Box 1 Text</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
