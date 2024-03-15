import { View, Text } from "react-native";
import React from "react";

interface CarroProps {
  car: string;
  brand: string;
  hp: number;
}

export default function Carro({ car, brand, hp }: CarroProps) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text>Carro: {car}</Text>
      <Text>Marca: {brand}</Text>
      <Text>HP: {hp}</Text>
    </View>
  );
}
