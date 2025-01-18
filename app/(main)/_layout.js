import { Stack } from "expo-router";

export default function Main() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "الصفحة الريسية" }} />
    </Stack>
  );
}
