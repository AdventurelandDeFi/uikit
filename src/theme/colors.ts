import { Colors } from "./types";

export const baseColors = {
  failure: "#B24A3B",
  primary: "#74B7AC",
  primaryBright: "#56B8B7D9",
  primaryDark: "#429E9D",
  secondary: "#988686",
  success: "#74B7AC",
  warning: "#E8B4B8",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#D1D0D0",
  backgroundDisabled: "#a7a6a6",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#EBEAE8",
  tertiary: "#EFF4F5",
  text: "#67595E",
  textDisabled: "#BDC2C4",
  textSubtle: "#988686",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #DFD6D1 0%, #96D3D3 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#1F232C",
  backgroundDisabled: "#353841",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#353841",
  primaryDark: "#222222",
  tertiary: "#3f4759",
  text: "#EBEAE8",
  textDisabled: "#666171",
  textSubtle: "#EBEAE8",
  borderColor: "#524B63",
  card: "#353841",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #988686 0%, #96D3D3 100%)",
  },
};
