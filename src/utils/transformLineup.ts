import {
  TeamLineup,
  Player,
  PlayerStats,
  LineupFormationPlayer,
  FieldCoordinate,
} from '../types';
import { FORMATION_COORDINATES_BY_PLACE } from './formationCoordinates';

type Stats = (PlayerStats | null)[];

/**
 * Check if a player has a specific stat type
 */
export const hasStat = (stats: Stats | undefined, statType: string): boolean => {
  return stats?.some(stat => stat?.type === statType) ?? false;
};

/**
 * Get the value of a specific stat type for a player
 */
export const getStatValue = (
  stats: Stats | undefined,
  statType: string
): number | string => {
  return stats?.find(stat => stat?.type === statType)?.value ?? 0;
};

/**
 * Get formation coordinates by formation place (1-11)
 */
const getCoordinatesByFormationPlace = (
  formation: string,
  formationPlace: string
): FieldCoordinate => {
  const formationCoords = FORMATION_COORDINATES_BY_PLACE[formation as keyof typeof FORMATION_COORDINATES_BY_PLACE];
  if (!formationCoords) {
    return { x: 49, y: 40 }; // Default position (center field)
  }

  return formationCoords[formationPlace] || { x: 49, y: 40 };
};

/**
 * Determine position type based on formationPlace and formation
 */
const getPositionTypeByFormationPlace = (
  formation: string,
  formationPlace: string
): string => {
  const placeInt = parseInt(formationPlace);

  // Common position mappings based on formationPlace
  if (placeInt === 1) return 'GK';

  // For most formations, places 2-6 are defenders
  if (placeInt >= 2 && placeInt <= 6) {
    if (formation?.startsWith('3-')) {
      // 3-back formations: 4,5,6 are CBs, 2,3 might be wing-backs
      if (placeInt >= 4 && placeInt <= 6) return 'CB';
      if (placeInt === 2) return 'RB';
      if (placeInt === 3) return 'LB';
    } else if (formation?.startsWith('5-')) {
      // 5-back formations: all are defenders
      return placeInt === 2 || placeInt === 3 ? 'LB' : 'CB';
    } else {
      // 4-back formations
      if (placeInt === 2) return 'RB';
      if (placeInt === 3) return 'LB';
      return 'CB';
    }
  }

  // Places 7-8 are usually midfielders
  if (placeInt >= 7 && placeInt <= 8) return 'CM';

  // Place 9 is usually striker
  if (placeInt === 9) return 'ST';

  // Places 10-11 vary by formation
  if (placeInt >= 10 && placeInt <= 11) {
    if (formation.includes('-3-') && formation.endsWith('3')) {
      return placeInt === 10 ? 'RW' : 'LW'; // 4-3-3, 3-4-3 etc.
    }
    return 'CAM'; // Default to attacking midfielder
  }

  return 'CM'; // Default fallback
};

/**
 * Transform lineup data by formation place into positioned players
 *
 * @param data - TeamLineup data with players and formation
 * @param formation - Formation string (e.g., "4-3-3", "4-2-3-1")
 * @param getPlayerPhotoUrl - Optional function to generate photo URLs
 * @returns Array of positioned players with stats
 */
export const transformLineupByFormationPlace = (
  data: TeamLineup,
  formation: string = '4-2-3-1',
  getPlayerPhotoUrl?: (playerId: string) => string
): LineupFormationPlayer[] => {
  // Filter starters (players with formationPlace 1-11)
  const starters =
    data?.players?.filter(
      (p: Player) =>
        p?.formationPlace &&
        parseInt(p?.formationPlace) >= 1 &&
        parseInt(p?.formationPlace) <= 11 &&
        p?.position !== 'Substitute'
    ) || [];

  if (starters?.length < 11) {
    return [];
  }

  const transformedPlayers = starters?.map(player => {
    const coordinates = getCoordinatesByFormationPlace(formation, player?.formationPlace!);
    const positionType = getPositionTypeByFormationPlace(formation, player?.formationPlace!);

    // Generate photo URL using custom function or empty string
    const photoUrl = getPlayerPhotoUrl
      ? getPlayerPhotoUrl(player?.playerId)
      : '';

    return {
      playerId: player?.playerId,
      matchName: player?.matchName || '',
      position: positionType,
      formationPlace: player?.formationPlace!,
      rating: player?.rating,
      isScorer: player?.stats && player?.stats?.length ? hasStat(player?.stats, 'goals') : false,
      isSubstitute:
        player?.stats && player?.stats?.length ? hasStat(player?.stats, 'totalSubOff') : false,
      isYellowCard:
        player?.stats && player?.stats?.length ? hasStat(player?.stats, 'yellowCard') : false,
      isRedCard: player?.stats && player?.stats?.length ? hasStat(player?.stats, 'redCard') : false,
      isGoalAssist:
        player?.stats && player?.stats?.length ? hasStat(player?.stats, 'goalAssist') : false,
      isOwnGoal:
        player?.stats && player?.stats?.length ? hasStat(player?.stats, 'ownGoals') : false,
      goals: Number(getStatValue(player?.stats, 'goals')),
      ownGoals: Number(getStatValue(player?.stats, 'ownGoals')),
      shirtNumber: player?.shirtNumber,
      photo: photoUrl,
      x: coordinates?.x,
      y: coordinates?.y,
    };
  });

  // Sort by formationPlace to maintain consistent ordering
  transformedPlayers.sort((a, b) => {
    return parseInt(a.formationPlace) - parseInt(b.formationPlace);
  });

  return transformedPlayers;
};
