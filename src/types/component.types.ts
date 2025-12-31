import { ReactNode } from 'react';
import { ImageSourcePropType, ViewStyle, TextStyle } from 'react-native';
import { LineupFormationPlayer, TeamLineup } from './formation.types';
import { FormationTheme } from './theme.types';

/**
 * Props for the main FormationField component
 */
export interface FormationFieldProps {
  // Required
  lineup: TeamLineup;

  // Optional - Dimensions
  width?: number; // Default: screen width
  height?: number; // Default: 395

  // Optional - Theme customization
  theme?: Partial<FormationTheme>;

  // Optional - Asset overrides
  fieldImage?: ImageSourcePropType;
  playerPlaceholder?: ImageSourcePropType;
  footballIcon?: ImageSourcePropType;
  kickerIcon?: ImageSourcePropType;
  renewalIcon?: ImageSourcePropType;
  ownGoalIcon?: ImageSourcePropType;
  logoImage?: ImageSourcePropType;

  // Optional - Component overrides
  renderPlayerCard?: (
    player: LineupFormationPlayer,
    fieldWidth: number,
    fieldHeight: number
  ) => ReactNode;
  renderFooter?: (formation: string) => ReactNode;

  // Optional - Callbacks
  onPlayerPress?: (player: LineupFormationPlayer) => void;

  // Optional - Display options
  showLogo?: boolean; // Default: true
  showFormation?: boolean; // Default: true
  showRating?: boolean; // Default: false

  // Optional - Styling
  containerStyle?: ViewStyle;
  playerCardStyle?: ViewStyle;
  playerNameStyle?: TextStyle;

  // Optional - Photo URL resolver
  getPlayerPhotoUrl?: (playerId: string) => string;
}

/**
 * Props for the PlayerCard component
 */
export interface PlayerCardProps {
  player: LineupFormationPlayer;
  fieldWidth: number;
  fieldHeight: number;
  theme: FormationTheme;
  onPress?: (player: LineupFormationPlayer) => void;
  style?: ViewStyle;
  nameStyle?: TextStyle;

  // Asset overrides
  playerPlaceholder?: ImageSourcePropType;
  footballIcon?: ImageSourcePropType;
  kickerIcon?: ImageSourcePropType;
  renewalIcon?: ImageSourcePropType;
  ownGoalIcon?: ImageSourcePropType;
}
