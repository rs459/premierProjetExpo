import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ChildProps {
  onPress: (name: string) => void;
}

export function Child({ onPress }: ChildProps) {
  // Fonction locale qui appelle le callback avec un paramètre
  function onPress_() {
    onPress("les dev");
  }
  return (
    <TouchableOpacity onPress={onPress_} style={styles.button}>
      <Text style={styles.buttonText}>Cliquez ici</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
