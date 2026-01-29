import { create } from 'zustand'
import type {
  ThemeState,
  ColorItem,
  FontSizeItem,
  FontFamilyItem,
  ShadowItem,
  BorderRadiusItem,
  Preferences,
} from '../../shared/types'

interface ThemeActions {
  initializeTheme: (theme: Partial<ThemeState>) => void
  setColors: (colors: ColorItem[]) => void
  setGradientColors: (gradientColors: string[]) => void
  setFontSize: (fontSize: FontSizeItem[]) => void
  setFontFamily: (fontFamily: FontFamilyItem[]) => void
  setBoxShadow: (boxShadow: ShadowItem[]) => void
  setBorderRadius: (borderRadius: BorderRadiusItem[]) => void
  setBaseFontSize: (baseFontSize: number | false) => void
  setDefaultBorderRadiusIndex: (index: number | null) => void
  setPreferences: (preferences: Partial<Preferences>) => void
  updateColor: (index: number, color: ColorItem) => void
  removeColor: (index: number) => void
}

const defaultPreferences: Preferences = {
  tailwindVersion: '4',
  colorFormat: 'hex',
  grouped: false,
  useRem: true,
}

export const useThemeStore = create<ThemeState & ThemeActions>((set) => ({
  // State
  colors: [],
  gradientColors: [],
  fontSize: [],
  fontFamily: [],
  boxShadow: [],
  borderRadius: [],
  baseFontSize: false,
  defaultBorderRadiusIndex: null,
  preferences: defaultPreferences,

  // Actions
  initializeTheme: (theme) =>
    set((state) => ({
      ...state,
      ...theme,
      preferences: {
        ...defaultPreferences,
        ...theme.preferences,
      },
    })),

  setColors: (colors) => set({ colors }),

  setGradientColors: (gradientColors) => set({ gradientColors }),

  setFontSize: (fontSize) => set({ fontSize }),

  setFontFamily: (fontFamily) => set({ fontFamily }),

  setBoxShadow: (boxShadow) => set({ boxShadow }),

  setBorderRadius: (borderRadius) => set({ borderRadius }),

  setBaseFontSize: (baseFontSize) => set({ baseFontSize }),

  setDefaultBorderRadiusIndex: (index) => set({ defaultBorderRadiusIndex: index }),

  setPreferences: (prefs) =>
    set((state) => ({
      preferences: { ...state.preferences, ...prefs },
    })),

  updateColor: (index, color) =>
    set((state) => {
      const newColors = [...state.colors]
      newColors[index] = color
      return { colors: newColors }
    }),

  removeColor: (index) =>
    set((state) => ({
      colors: state.colors.filter((_, i) => i !== index),
    })),
}))
