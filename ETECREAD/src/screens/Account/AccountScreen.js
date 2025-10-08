import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>👤 Account Screen</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>Bem-vindo à sua conta!</Text>
      <Button title="Sair" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
}
