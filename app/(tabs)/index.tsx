import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "../../App.styles";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={s.container}>
          <View style={[s.box, s.box1]}>
            <Text>Box 1 Text</Text>
          </View>
          <View style={[s.box, s.box2]}>
            <Text>Box 2 Text</Text>
          </View>
          <View style={[s.box, s.box3]}>
            <Text>Box 3 Text</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
