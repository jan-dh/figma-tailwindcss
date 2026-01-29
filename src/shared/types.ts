export interface ColorItem {
  name: string
  value: string
}

export interface FontSizeItem {
  name: string
  value: string
}

export interface FontFamilyItem {
  name: string
  value: string
}

export interface ShadowItem {
  name: string
  value: string
}

export interface BorderRadiusItem {
  name: string
  value: number | string
}

export interface Preferences {
  tailwindVersion: '3' | '4'
  colorFormat: 'hex' | 'rgba' | 'hsl' | 'oklch' | 'oklab'
  grouped: boolean
}

export interface ThemeState {
  colors: ColorItem[]
  gradientColors: string[]
  fontSize: FontSizeItem[]
  fontFamily: FontFamilyItem[]
  boxShadow: ShadowItem[]
  borderRadius: BorderRadiusItem[]
  baseFontSize: number | false
  preferences: Preferences
}

export type CleanTheme = {
  colors?: Record<string, string | Record<string, string>>
  fontFamily?: Record<string, string>
  fontSize?: Record<string, string>
  boxShadow?: Record<string, string>
  borderRadius?: Record<string, string>
}
