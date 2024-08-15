import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="details" options={{ headerShown: false }} />
    </Tabs>
  );
}
