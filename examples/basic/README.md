# Basic Formation Example

This example demonstrates the simplest way to use the `FormationField` component.

## Usage

```tsx
import { FormationField } from 'react-native-football-formation';

<FormationField
  lineup={teamLineup}
  getPlayerPhotoUrl={(playerId) =>
    `https://your-api.com/players/${playerId}.png`
  }
/>
```

## Features Demonstrated

- Basic formation display (4-3-3)
- Player stats (goals, assists, cards)
- Default theme and styling
- Photo URL generation

## Running the Example

1. Copy the `BasicFormationExample.tsx` file to your React Native project
2. Install the package: `npm install react-native-football-formation`
3. Import and use the component in your app
