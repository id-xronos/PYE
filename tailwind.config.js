import type { Config } from 'tailwindcss';
import { colors, spacing, fontSizes } from './src/design-system/tokens';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
      spacing,
      fontSize: fontSizes,
    },
  },
  plugins: [],
};

export default config;
