import { Stack } from "expo-router";

export default function ChallengesAndStudyingStack(props) {
  return (
    <Stack>
      <Stack.Screen
        name="stud1"
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="challenges"
        options={{
          title: "Challenges",
        }}
      />
      <Stack.Screen
        name="studying"
        options={{
          title: "Words",
        }}
      />
    </Stack>
  );
}
