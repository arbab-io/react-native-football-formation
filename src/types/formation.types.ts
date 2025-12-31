/**
 * Type definitions for React Native Football Formation component
 */

/**
 * Supported player statistics types
 */
export type PlayerStatType =
  | 'goals'
  | 'yellowCard'
  | 'redCard'
  | 'goalAssist'
  | 'totalSubOff'
  | 'ownGoals';

export interface PlayerStats {
  type: PlayerStatType;
  value: string | number;
}

export interface Player {
  rating: string;
  playerId: string;
  position: string;
  matchName: string;
  shirtNumber: number;
  positionSide?: string;
  formationPosition?: string;
  formationPlace?: string;
  stats: (PlayerStats | null)[]; // Array can contain PlayerStats objects or null values
}

export interface TeamLineup {
  players: Player[];
  formationUsed: string; // e.g., "4-3-3", "4-2-3-1"
}

export interface LineupFormationPlayer {
  rating: string;
  playerId: string;
  position: string;
  matchName: string;
  shirtNumber: number;
  isScorer: boolean;
  isSubstitute: boolean;
  isYellowCard: boolean;
  isRedCard: boolean;
  isOwnGoal: boolean;
  ownGoals: number;
  isGoalAssist: boolean;
  goals: number;
  formationPlace: string;
  photo: string;
  x: string | number; // X coordinate (0-100)
  y: string | number; // Y coordinate (0-100)
}

/**
 * Supported formation types
 */
export type FormationType =
  | '4-4-2'
  | '4-1-2-1-2'
  | '4-3-3'
  | '4-5-1'
  | '4-4-1-1'
  | '4-1-4-1'
  | '4-2-3-1'
  | '4-3-2-1'
  | '5-3-2'
  | '5-4-1'
  | '3-5-2'
  | '3-4-3'
  | '4-2-2-2'
  | '3-5-1-1'
  | '3-4-2-1'
  | '3-4-1-2'
  | '3-1-4-2'
  | '3-4-3d'
  | '4-1-3-2'
  | '4-2-4-0'
  | '4-3-1-2'
  | '3-2-4-1'
  | '3-3-3-1';

/**
 * Coordinate for player positioning on the field
 */
export interface FieldCoordinate {
  x: number; // X position (0-100)
  y: number; // Y position (0-100)
}

/**
 * Formation coordinates mapping
 */
export type FormationCoordinates = {
  [key: string]: FieldCoordinate;
};
