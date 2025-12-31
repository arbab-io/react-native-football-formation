import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { FormationField, TeamLineup } from 'react-native-football-formation';

/**
 * Basic Formation Example
 *
 * This example shows the simplest way to use the FormationField component
 * with minimal configuration.
 */

const BasicFormationExample = () => {
  // Example team lineup data
  const teamLineup: TeamLineup = {
    players: [
      {
        playerId: '1',
        matchName: 'Alisson',
        shirtNumber: 1,
        rating: '7.8',
        position: 'Goalkeeper',
        formationPlace: '1',
        stats: [],
      },
      {
        playerId: '2',
        matchName: 'Alexander-Arnold',
        shirtNumber: 66,
        rating: '8.2',
        position: 'Defender',
        formationPlace: '2',
        stats: [{ type: 'goalAssist', value: '1' }],
      },
      {
        playerId: '3',
        matchName: 'Van Dijk',
        shirtNumber: 4,
        rating: '7.9',
        position: 'Defender',
        formationPlace: '4',
        stats: [],
      },
      {
        playerId: '4',
        matchName: 'Konaté',
        shirtNumber: 5,
        rating: '7.5',
        position: 'Defender',
        formationPlace: '5',
        stats: [{ type: 'yellowCard', value: '1' }],
      },
      {
        playerId: '5',
        matchName: 'Robertson',
        shirtNumber: 26,
        rating: '7.8',
        position: 'Defender',
        formationPlace: '3',
        stats: [],
      },
      {
        playerId: '6',
        matchName: 'Fabinho',
        shirtNumber: 3,
        rating: '7.2',
        position: 'Midfielder',
        formationPlace: '6',
        stats: [],
      },
      {
        playerId: '7',
        matchName: 'Henderson',
        shirtNumber: 14,
        rating: '7.4',
        position: 'Midfielder',
        formationPlace: '7',
        stats: [],
      },
      {
        playerId: '8',
        matchName: 'Thiago',
        shirtNumber: 6,
        rating: '7.6',
        position: 'Midfielder',
        formationPlace: '8',
        stats: [],
      },
      {
        playerId: '9',
        matchName: 'Salah',
        shirtNumber: 11,
        rating: '9.1',
        position: 'Forward',
        formationPlace: '10',
        stats: [
          { type: 'goals', value: '2' },
          { type: 'goalAssist', value: '1' },
        ],
      },
      {
        playerId: '10',
        matchName: 'Firmino',
        shirtNumber: 9,
        rating: '7.8',
        position: 'Forward',
        formationPlace: '9',
        stats: [{ type: 'goals', value: '1' }],
      },
      {
        playerId: '11',
        matchName: 'Díaz',
        shirtNumber: 23,
        rating: '8.3',
        position: 'Forward',
        formationPlace: '11',
        stats: [{ type: 'goals', value: '1' }],
      },
    ],
    formationUsed: '433', // 4-3-3 formation
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <FormationField
          lineup={teamLineup}
          getPlayerPhotoUrl={(playerId) =>
            `https://media.api-sports.io/football/players/${playerId}.png`
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13151F',
  },
  content: {
    padding: 16,
  },
});

export default BasicFormationExample;
