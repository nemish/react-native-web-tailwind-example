// @generated: @expo/next-adapter@2.1.52
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <View>
        <Button
          onPress={() => setCounter((prev) => prev + 1)}
          title="My button"
        />
        <Text>Kolichestvo shpal: {counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
