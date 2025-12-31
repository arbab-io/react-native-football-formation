# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-31

### Added
- Initial release of React Native Football Formation
- Support for 24 different tactical formations
- Player card component with stats display (goals, assists, cards, substitutions)
- Customizable theme system (colors, typography, spacing, border radius)
- RTL (Right-to-Left) language support
- TypeScript definitions for all components and types
- Default image assets (field background, icons)
- Asset override capability
- Custom component rendering (player cards, footer)
- Player press callback support
- Formation badge display
- Optional logo display
- Utility functions for lineup transformation
- Full documentation and examples

### Features
- `FormationField` - Main component for displaying formations
- `PlayerCard` - Individual player display component
- `transformLineupByFormationPlace` - Utility for transforming lineup data
- `hasStat` / `getStatValue` - Stat checking utilities
- `FORMATION_COORDINATES_BY_PLACE` - Formation coordinate mappings
- `defaultTheme` - Default theme configuration
- `mergeTheme` - Theme merging utility

### Supported Formations
- 4-4-2, 4-3-3, 4-2-3-1, 4-1-2-1-2, 4-5-1, 4-4-1-1
- 4-1-4-1, 4-3-2-1, 4-2-2-2, 4-1-3-2, 4-2-4-0, 4-3-1-2
- 5-3-2, 5-4-1
- 3-5-2, 3-4-3, 3-5-1-1, 3-4-2-1, 3-4-1-2, 3-1-4-2
- 3-4-3d, 3-2-4-1, 3-3-3-1
