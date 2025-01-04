import { Stack } from "expo-router";

export default function Authentication() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "اهلا" }} />
      <Stack.Screen name="signin" options={{ title: "تسجيل الدخول" }} />
      <Stack.Screen name="signup" options={{ title: "أنشاء حساب" }} />
    </Stack>
  );
}
