import { FormationTheme } from '../types';

/**
 * Default theme configuration for the Formation Field component
 * All values can be customized by passing a partial theme object to the component
 */
export const defaultTheme: FormationTheme = {
  colors: {
    primary: '#A8FF03',
    blue: '#2194FF',
    white: '#ffffff',
    text: '#13151F',
    border: '#96CBCB',
    warning: '#FFA500',
    success: '#34C759',
    error: '#dc3545',
    newError: '#FF4A4A',
    formationBadge: '#41854A',
  },

  spacing: {
    playerCardWidth: 70,
    playerCardHeight: 50,
    playerImageSize: 44,
    jerseyNumberSize: 16,
    iconSize: 12,
    badgeMinWidth: 20,
    badgeHeight: 14,
  },

  typography: {
    playerNameSize: 12,
    formationSize: 14,
    jerseyNumberSize: 8,
    goalCountSize: 8,
    fontFamily: undefined,
    fontFamilyBold: undefined,
  },

  borderRadius: {
    playerImage: 44,
    badge: 12,
    card: 1,
  },
};

/**
 * Deep merge theme objects
 * Allows users to override only specific theme values
 */
export const mergeTheme = (
  customTheme?: Partial<FormationTheme>
): FormationTheme => {
  if (!customTheme) return defaultTheme;

  return {
    colors: {
      ...defaultTheme.colors,
      ...customTheme.colors,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...customTheme.spacing,
    },
    typography: {
      ...defaultTheme.typography,
      ...customTheme.typography,
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      ...customTheme.borderRadius,
    },
  };
};
