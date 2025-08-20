import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>O Jorge esteve aqui</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
textoRoxo:{
  color: 'purple'
}
})