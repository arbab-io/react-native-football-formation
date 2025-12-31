# React Native Football Formation

A highly customizable React Native component for displaying football/soccer team formations with player positions, stats, and match information.

![React Native](https://img.shields.io/badge/React%20Native-%3E%3D0.74.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

✅ **24 Supported Formations** - All major tactical formations (4-3-3, 4-2-3-1, 3-5-2, etc.)
✅ **Player Statistics** - Goals, assists, cards, substitutions, own goals
✅ **Highly Customizable** - Theme system for colors, fonts, spacing
✅ **RTL Support** - Built-in support for right-to-left languages
✅ **TypeScript** - Full type safety and IntelliSense
✅ **Expo & Bare RN** - Compatible with both Expo and bare React Native projects
✅ **Asset Override** - Use your own field backgrounds and icons
✅ **Component Override** - Custom rendering for player cards and footer
✅ **Responsive** - Adapts to different screen sizes

## Installation

```bash
npm install react-native-football-formation
```

or

```bash
yarn add react-native-football-formation
```

## Quick Start

```tsx
import { FormationField } from 'react-native-football-formation';

function App() {
  const lineup = {
    players: [/* player data */],
    formationUsed: '433',
  };

  return <FormationField lineup={lineup} />;
}
```

## Basic Usage

### Simple Example

```tsx
import React from 'react';
import { FormationField } from 'react-native-football-formation';

export default function FormationScreen() {
  const teamLineup = {
    players: [
      {
        playerId: '1',
        matchName: 'De Gea',
        shirtNumber: 1,
        rating: '7.5',
        position: 'Goalkeeper',
        formationPlace: '1',
        stats: [],
      },
      // ... 10 more players
    ],
    formationUsed: '433',
  };

  return (
    <FormationField
      lineup={teamLineup}
      getPlayerPhotoUrl={(playerId) =>
        `https://example.com/players/${playerId}.png`
      }
    />
  );
}
```

### With Custom Theme

```tsx
<FormationField
  lineup={teamLineup}
  theme={{
    colors: {
      primary: '#FF0000',
      success: '#00FF00',
      warning: '#FFAA00',
    },
    typography: {
      fontFamily: 'MyCustomFont-Regular',
      fontFamilyBold: 'MyCustomFont-Bold',
    },
  }}
/>
```

### With Player Interaction

```tsx
<FormationField
  lineup={teamLineup}
  onPlayerPress={(player) => {
    console.log('Player tapped:', player.matchName);
    // Navigate to player details or show modal
  }}
/>
```

### With Custom Assets

```tsx
<FormationField
  lineup={teamLineup}
  fieldImage={require('./assets/custom-field.png')}
  footballIcon={require('./assets/custom-goal-icon.png')}
  playerPlaceholder={require('./assets/custom-placeholder.png')}
/>
```

## API Reference

### FormationField Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lineup` | `TeamLineup` | **required** | Team lineup data with players and formation |
| `width` | `number` | `screenWidth + 10` | Field width |
| `height` | `number` | `395` | Field height |
| `theme` | `Partial<FormationTheme>` | `defaultTheme` | Theme customization |
| `fieldImage` | `ImageSourcePropType` | default field | Background field image |
| `playerPlaceholder` | `ImageSourcePropType` | default avatar | Placeholder for missing player photos |
| `footballIcon` | `ImageSourcePropType` | default icon | Icon for goals |
| `kickerIcon` | `ImageSourcePropType` | default icon | Icon for assists |
| `renewalIcon` | `ImageSourcePropType` | default icon | Icon for substitutions |
| `ownGoalIcon` | `ImageSourcePropType` | default icon | Icon for own goals |
| `logoImage` | `ImageSourcePropType` | `undefined` | Optional logo to display |
| `renderPlayerCard` | `(player, width, height) => ReactNode` | `undefined` | Custom player card renderer |
| `renderFooter` | `(formation) => ReactNode` | `undefined` | Custom footer renderer |
| `onPlayerPress` | `(player) => void` | `undefined` | Player tap callback |
| `showLogo` | `boolean` | `false` | Show/hide logo |
| `showFormation` | `boolean` | `true` | Show/hide formation badge |
| `showRating` | `boolean` | `false` | Show/hide player ratings |
| `containerStyle` | `ViewStyle` | `undefined` | Container style override |
| `playerCardStyle` | `ViewStyle` | `undefined` | Player card style override |
| `playerNameStyle` | `TextStyle` | `undefined` | Player name text style override |
| `getPlayerPhotoUrl` | `(playerId: string) => string` | `undefined` | Function to generate player photo URLs |

### TeamLineup Type

```typescript
interface TeamLineup {
  players: Player[];
  formationUsed: string; // e.g., "433", "4231", "352"
}

interface Player {
  rating: string;
  playerId: string;
  position: string;
  matchName: string;
  shirtNumber: number;
  formationPlace?: string; // "1" to "11"
  stats: PlayerStats[] | null[];
}

interface PlayerStats {
  type: string; // "goals", "yellowCard", "redCard", "goalAssist", etc.
  value: string | number;
}
```

### FormationTheme Type

```typescript
interface FormationTheme {
  colors: {
    primary: string;
    blue: string;
    white: string;
    text: string;
    border: string;
    warning: string;
    success: string;
    error: string;
    newError: string;
    formationBadge: string;
  };
  spacing: {
    playerCardWidth: number;
    playerCardHeight: number;
    playerImageSize: number;
    jerseyNumberSize: number;
    iconSize: number;
    badgeMinWidth: number;
    badgeHeight: number;
  };
  typography: {
    playerNameSize: number;
    formationSize: number;
    jerseyNumberSize: number;
    goalCountSize: number;
    fontFamily?: string;
    fontFamilyBold?: string;
  };
  borderRadius: {
    playerImage: number;
    badge: number;
    card: number;
  };
}
```

## Supported Formations

The component supports 24 different tactical formations:

### 4-Back Formations
- `4-4-2` - Classic 4-4-2
- `4-3-3` - 4-3-3
- `4-2-3-1` - 4-2-3-1 (most common modern formation)
- `4-1-2-1-2` - 4-1-2-1-2 Diamond
- `4-5-1` - 4-5-1
- `4-4-1-1` - 4-4-1-1
- `4-1-4-1` - 4-1-4-1
- `4-3-2-1` - 4-3-2-1 Christmas Tree
- `4-2-2-2` - 4-2-2-2
- `4-1-3-2` - 4-1-3-2
- `4-2-4-0` - 4-2-4-0 False 9
- `4-3-1-2` - 4-3-1-2

### 5-Back Formations
- `5-3-2` - 5-3-2
- `5-4-1` - 5-4-1

### 3-Back Formations
- `3-5-2` - 3-5-2
- `3-4-3` - 3-4-3
- `3-5-1-1` - 3-5-1-1
- `3-4-2-1` - 3-4-2-1
- `3-4-1-2` - 3-4-1-2
- `3-1-4-2` - 3-1-4-2
- `3-4-3d` - 3-4-3 Diamond
- `3-2-4-1` - 3-2-4-1
- `3-3-3-1` - 3-3-3-1

## Advanced Usage

### Custom Player Card Renderer

```tsx
<FormationField
  lineup={teamLineup}
  renderPlayerCard={(player, fieldWidth, fieldHeight) => (
    <CustomPlayerCard
      player={player}
      width={fieldWidth}
      height={fieldHeight}
      onPress={() => navigateToPlayerDetails(player)}
    />
  )}
/>
```

### Custom Footer

```tsx
<FormationField
  lineup={teamLineup}
  renderFooter={(formation) => (
    <View style={styles.customFooter}>
      <Text>Formation: {formation}</Text>
      <Text>Tactical Analysis</Text>
    </View>
  )}
/>
```

### Full Customization Example

```tsx
<FormationField
  lineup={teamLineup}
  width={400}
  height={500}
  theme={{
    colors: {
      primary: '#0066CC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545',
      text: '#000000',
      white: '#FFFFFF',
      formationBadge: '#2C3E50',
    },
    typography: {
      fontFamily: 'Roboto-Regular',
      fontFamilyBold: 'Roboto-Bold',
      playerNameSize: 14,
      formationSize: 16,
    },
    spacing: {
      playerCardWidth: 80,
      playerCardHeight: 60,
      playerImageSize: 50,
    },
  }}
  fieldImage={require('./assets/grass-field.png')}
  onPlayerPress={(player) => console.log(player)}
  showFormation={true}
  showLogo={false}
  getPlayerPhotoUrl={(playerId) =>
    `https://cdn.example.com/players/${playerId}.png`
  }
/>
```

## Player Statistics

The component automatically displays player statistics when available:

- ⚽ **Goals** - Football icon with count
- 👟 **Assists** - Kicker icon
- 🟨 **Yellow Card** - Yellow card indicator
- 🟥 **Red Card** - Red card indicator
- 🔄 **Substitution** - Substitution icon
- ⚽🔴 **Own Goals** - Own goal icon with count

Statistics are extracted from the `stats` array in the player data:

```typescript
{
  stats: [
    { type: 'goals', value: '2' },
    { type: 'yellowCard', value: '1' },
    { type: 'goalAssist', value: '1' },
  ]
}
```

## Utilities

The package exports utility functions for advanced use cases:

```typescript
import {
  transformLineupByFormationPlace,
  hasStat,
  getStatValue,
  FORMATION_COORDINATES_BY_PLACE,
} from 'react-native-football-formation';

// Transform raw lineup data
const positionedPlayers = transformLineupByFormationPlace(
  teamLineup,
  '4-3-3',
  (playerId) => `https://example.com/${playerId}.png`
);

// Check if player has a stat
const hasGoals = hasStat(player.stats, 'goals');

// Get stat value
const goalCount = getStatValue(player.stats, 'goals');

// Access formation coordinates
const coords = FORMATION_COORDINATES_BY_PLACE['4-3-3']['1']; // GK position
```

## TypeScript Support

The package is written in TypeScript and includes full type definitions. Import types for better development experience:

```typescript
import type {
  TeamLineup,
  Player,
  LineupFormationPlayer,
  FormationTheme,
  FormationFieldProps,
} from 'react-native-football-formation';
```

## Troubleshooting

### Images not loading

Make sure you've provided either:
1. Player photo URLs via the `photo` field in player data, OR
2. A `getPlayerPhotoUrl` function prop

```tsx
<FormationField
  lineup={teamLineup}
  getPlayerPhotoUrl={(playerId) =>
    `https://your-cdn.com/players/${playerId}.png`
  }
/>
```

### Formation not displaying correctly

Ensure the `formationUsed` field matches one of the supported formations (without dashes):
- ✅ `"433"` or `"4-3-3"`
- ❌ `"4-3-3-1"` (not supported)

The component automatically handles both formats ("433" and "4-3-3").

### Players in wrong positions

Check that each player has a valid `formationPlace` field from "1" to "11":
- Position 1 is always the goalkeeper
- Positions 2-11 depend on the formation

## Examples

See the `/examples` directory for complete working examples:

- **basic/** - Simple formation display
- **custom-styling/** - Custom theme and styling
- **custom-assets/** - Custom images and icons

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Arbab Rafiq

## Author

**Arbab Rafiq**

## Acknowledgments

- Inspired by modern football tactical analysis tools
- Built for the React Native community

---

Made with ⚽ for football fans and developers
