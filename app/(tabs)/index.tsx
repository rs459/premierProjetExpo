import { FlexDemo } from "@/components/FlexDemo";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "../../App.styles";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={{ color: "red" }}>Hello 1</Text>
          <Text style={{ color: "blue" }}>Hello 2</Text>
          <Text style={{ backgroundColor: "green" }}>Hello 3</Text>
          <View style={{ backgroundColor: "blue", height: 200, width: 200 }}>
            <Text style={{ color: "yellow", fontSize: 30 }}>Carré</Text>
          </View>
          <View style={s.square}>
            <Text>Mon carré stylé</Text>
          </View>
        </View>
        <FlexDemo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
