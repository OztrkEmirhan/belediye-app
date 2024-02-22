declare global {
  namespace UICore {
    type ThemeKeyType = 'light' | 'dark' | string;

    interface ThemeType {
      typography?: UITypography.TypographyType;
      colors?: UIColor.ColorType;
      key: ThemeKeyType;
    }
  }
}

export {};
