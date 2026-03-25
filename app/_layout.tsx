import config from "@/tamagui.config";
import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Stack>
        <Stack.Screen
          name="(tab)"
          options={{
            title: "App",
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack>
    </TamaguiProvider>
  );
}
