import React from 'react'
import { ModesEnum } from '../enums/modes.enum'
import { ThemesEnum } from '../enums/themes.enum'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultMode?: ModesEnum
  defaultTheme?: ThemesEnum
  modeStorageKey?: string
  themeStorageKey?: string
}

export interface ThemeProvider {
  getMode: () => ModesEnum
  setMode: React.Dispatch<React.SetStateAction<ModesEnum>>
  getTheme: () => ThemesEnum
  setTheme: React.Dispatch<React.SetStateAction<ThemesEnum>>
  toggleMode: () => void
}

export const ThemeProviderContext = React.createContext<unknown>(undefined)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  modeStorageKey = 'ui-theme',
  themeStorageKey = 'ui-theme',
  defaultMode = 'system',
  defaultTheme = 'sunset',
}) => {
  const [mode, setMode] = React.useState<ModesEnum>(
    (localStorage.getItem(modeStorageKey) as ModesEnum) || defaultMode
  )
  const [theme, setTheme] = React.useState<ThemesEnum>(
    (localStorage.getItem(themeStorageKey) as ThemesEnum) || defaultTheme
  )

  const toggleMode = React.useCallback(
    () => setMode((mode) => (mode === 'dark' ? 'light' : 'dark')),
    []
  )

  React.useMemo(() => {
    const root = window.document.documentElement

    root.classList.remove('dark', 'light')

    if (mode === 'system') {
      const mode = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(mode)
      return
    }

    root.classList.add(mode)
  }, [mode])

  React.useMemo(() => {
    const root = window.document.documentElement

    root.setAttribute('theme', theme)
  }, [theme])

  const state: ThemeProvider = React.useMemo(
    () => ({
      getMode: () => mode,
      setMode: (mode) => {
        localStorage.setItem(modeStorageKey, mode.toString())
        setMode(mode)
      },
      getTheme: () => theme,
      setTheme: (theme) => {
        localStorage.setItem(themeStorageKey, theme.toString())
        setTheme(theme)
      },
      toggleMode,
    }),
    [
      mode,
      setMode,
      theme,
      setTheme,
      toggleMode,
      modeStorageKey,
      themeStorageKey,
    ]
  )

  return (
    <ThemeProviderContext.Provider value={state}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context as ThemeProvider
}
