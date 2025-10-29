import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-red-100">
      <Text className="text-sm text-red-800">
        Olá 👋, seja bem-vindo à Home!
      </Text>
    </View>
  );
}
