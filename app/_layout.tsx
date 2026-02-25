import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="application-for-card" options={{ headerShown: false }} />
      </Stack>
    </KeyboardProvider>
  );
}
