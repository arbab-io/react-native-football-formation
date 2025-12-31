/**
 * Theme configuration types for the formation component
 */

export interface FormationThemeColors {
  primary: string;
  blue: string;
  white: string;
  text: string;
  playerName: string;
  border: string;
  warning: string;
  success: string;
  error: string;
  newError: string;
  formationBadge: string;
}

export interface FormationThemeSpacing {
  playerCardWidth: number;
  playerCardHeight: number;
  playerImageSize: number;
  jerseyNumberSize: number;
  iconSize: number;
  badgeMinWidth: number;
  badgeHeight: number;
}

export interface FormationThemeTypography {
  playerNameSize: number;
  formationSize: number;
  jerseyNumberSize: number;
  goalCountSize: number;
  fontFamily?: string;
  fontFamilyBold?: string;
}

export interface FormationThemeBorderRadius {
  playerImage: number;
  badge: number;
  card: number;
}

export interface FormationTheme {
  colors: FormationThemeColors;
  spacing: FormationThemeSpacing;
  typography: FormationThemeTypography;
  borderRadius: FormationThemeBorderRadius;
}
