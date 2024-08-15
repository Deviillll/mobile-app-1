import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="details" /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
