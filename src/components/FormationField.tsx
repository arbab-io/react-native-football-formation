import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  I18nManager,
  Platform,
} from 'react-native';
import { FormationFieldProps } from '../types';
import { transformLineupByFormationPlace } from '../utils';
import { mergeTheme } from '../theme';
import { defaultAssets } from '../assets';
import PlayerCard from './PlayerCard';

const { width: screenWidth } = Dimensions.get('window');

const FormationField: React.FC<FormationFieldProps> = ({
  lineup,
  width = screenWidth + 10,
  height = 395,
  theme: customTheme,
  fieldImage = defaultAssets.field,
  playerPlaceholder,
  footballIcon,
  kickerIcon,
  renewalIcon,
  ownGoalIcon,
  logoImage,
  renderPlayerCard,
  renderFooter,
  onPlayerPress,
  showLogo = false,
  showFormation = true,
  showRating = false,
  containerStyle,
  playerCardStyle,
  playerNameStyle,
  getPlayerPhotoUrl,
}) => {
  const theme = mergeTheme(customTheme);

  const lineupTransformed = useMemo(() => {
    if (!lineup) return [];

    const formation = lineup?.formationUsed?.split('').join('-') || '4-3-3';
    return transformLineupByFormationPlace(lineup, formation, getPlayerPhotoUrl);
  }, [lineup, getPlayerPhotoUrl]);

  const formationDisplay = lineup?.formationUsed?.split('').join('-') || '4-3-3';

  return (
    <ImageBackground
      source={fieldImage}
      style={[
        styles.footballField,
        {
          width,
          height,
        },
        containerStyle,
      ]}
      resizeMode="cover">
      {/* Players */}
      {!!lineupTransformed?.length &&
        lineupTransformed?.map(player => {
          if (renderPlayerCard) {
            return (
              <View key={player.playerId}>
                {renderPlayerCard(player, width, height)}
              </View>
            );
          }

          return (
            <PlayerCard
              key={player.playerId}
              player={player}
              fieldWidth={width}
              fieldHeight={height}
              theme={theme}
              onPress={onPlayerPress}
              style={playerCardStyle}
              nameStyle={playerNameStyle}
              playerPlaceholder={playerPlaceholder}
              footballIcon={footballIcon}
              kickerIcon={kickerIcon}
              renewalIcon={renewalIcon}
              ownGoalIcon={ownGoalIcon}
            />
          );
        })}

      {/* Footer Section */}
      {renderFooter ? (
        <View style={styles.fieldBottomWrapper}>
          {renderFooter(formationDisplay)}
        </View>
      ) : (
        <View style={styles.fieldBottomWrapper}>
          <View
            style={[
              styles.fieldBottomContainer,
              {
                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
              },
            ]}>
            {/* Formation Display */}
            {showFormation && (
              <View style={{ justifyContent: 'center' }}>
                <View
                  style={[
                    styles.formationUsedContainer,
                    { backgroundColor: theme.colors.formationBadge },
                  ]}>
                  <Text
                    style={[
                      styles.formationText,
                      {
                        fontSize: theme.typography.formationSize,
                        fontFamily: theme.typography.fontFamilyBold,
                        color: theme.colors.white,
                      },
                    ]}>
                    {formationDisplay}
                  </Text>
                </View>
              </View>
            )}

            {/* Optional Logo */}
            {showLogo && logoImage && (
              <View style={styles.logoImageContainer}>
                <ImageBackground source={logoImage} style={styles.logoImage} />
              </View>
            )}
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  footballField: {
    position: 'relative',
    marginTop: 20,
  },
  fieldBottomWrapper: {
    height: 40,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 4 : 5,
  },
  fieldBottomContainer: {
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formationUsedContainer: {
    minWidth: 60,
    minHeight: 20,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  formationText: {
    includeFontPadding: false,
  },
  logoImageContainer: {
    justifyContent: 'center',
  },
  logoImage: {
    width: 64,
    height: 60,
  },
});

export default React.memo(FormationField);
