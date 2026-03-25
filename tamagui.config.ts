import { createTamagui, createTokens } from "tamagui";

const tokens = createTokens({
  size: {
    sm: 8,
    md: 12,
    true: 12,
    lg: 20,
  },
  space: {
    sm: 4,
    md: 8,
    true: 8,
    lg: 12,
  },
  radius: {
    none: 0,
    sm: 3,
    true: 3,
  },
  color: {
    white: "#fff",
    black: "#000",
  },
});

export const config = createTamagui({
  tokens,
  themes: {
    light: {
      bg: "#f2f2f2",
      color: "#000",
    },
    dark: {
      bg: "#111",
      color: "#fff",
    },
  },
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 861 },
    short: { maxHeight: 820 },
    hoverable: { hover: "hover" },
    touchable: { pointer: "coarse" },
  },
  shorthands: {
    px: "paddingHorizontal",
  } as const,
  settings: {
    disableSSR: true,
    allowedStyleValues: "somewhat-strict-web",
  },
});

type OurConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends OurConfig {}
}

export default config;
