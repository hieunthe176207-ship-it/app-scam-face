import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui } from "tamagui";

const config = createTamagui({
  ...defaultConfig,

  themes: {
    ...defaultConfig.themes,

    light: {
      ...defaultConfig.themes.light,
      background: "#FFF8FB",
      color: "#1A1A1A",
      primary: "#F5809D",
      card: "#FFFFFF",
      muted: "#8E8E93",
    },

    dark: {
      ...defaultConfig.themes.dark,
      background: "#111111",
      color: "#FFFFFF",
      primary: "#F5809D",
      card: "#1C1C1E",
      muted: "#A1A1AA",
    },
  },
});

type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
