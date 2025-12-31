import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
  Platform,
} from 'react-native';
import { PlayerCardProps } from '../types';
import { defaultAssets } from '../assets';

const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  fieldWidth,
  fieldHeight,
  theme,
  onPress,
  style,
  nameStyle,
  playerPlaceholder = defaultAssets.playerPlaceholder,
  footballIcon = defaultAssets.football,
  kickerIcon = defaultAssets.kicker,
  renewalIcon = defaultAssets.renewal,
  ownGoalIcon = defaultAssets.ownGoals,
}) => {
  const getFirst10Chars = (str: string) => {
    const trimmed = [...str].slice(0, 10).join('');
    return str?.length > 10 ? trimmed + '…' : trimmed;
  };

  const playerX = (Number(player?.x) / 100) * fieldWidth - theme.spacing.playerCardWidth / 2;
  const playerY = (Number(player?.y) / 100) * fieldHeight - theme.spacing.playerCardHeight / 2;

  const cardContent = (
    <View
      style={[
        styles.playerCard,
        {
          left: playerX,
          top: playerY,
          width: theme.spacing.playerCardWidth,
          height: theme.spacing.playerCardHeight,
        },
        style,
      ]}>
      <View
        style={[
          styles.playerImageContainer,
          {
            width: theme.spacing.playerImageSize,
            height: theme.spacing.playerImageSize,
            borderRadius: theme.borderRadius.playerImage,
            borderColor: theme.colors.white,
          },
        ]}>
        <Image
          source={player?.photo ? { uri: player.photo } : playerPlaceholder}
          style={[
            styles.playerImage,
            { borderRadius: theme.borderRadius.playerImage },
          ]}
        />

        {/* Jersey Number */}
        <View
          style={[
            styles.jerseyNumber,
            I18nManager.isRTL ? { right: -5 } : { left: -5 },
          ]}>
          <View
            style={[
              styles.jerseyNumberWrapper,
              {
                width: theme.spacing.jerseyNumberSize,
                height: theme.spacing.jerseyNumberSize,
                borderRadius: theme.spacing.jerseyNumberSize,
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.border,
              },
            ]}>
            <Text
              style={[
                styles.jerseyText,
                {
                  fontSize: theme.typography.jerseyNumberSize,
                  color: theme.colors.text,
                  fontFamily: theme.typography.fontFamily,
                },
              ]}>
              {player?.shirtNumber}
            </Text>
          </View>
        </View>

        {/* Goal Assist Icon */}
        {player?.isGoalAssist && (
          <View
            style={[
              styles.assistIconWrapper,
              I18nManager.isRTL ? { right: -8 } : { left: -8 },
            ]}>
            <Image
              source={kickerIcon}
              style={[
                styles.assistIcon,
                {
                  width: theme.spacing.iconSize,
                  height: theme.spacing.iconSize,
                  borderRadius: theme.spacing.iconSize,
                },
              ]}
            />
          </View>
        )}

        {/* Own Goals */}
        {player?.isOwnGoal && (
          <View
            style={[
              styles.ownGoalsWrapper,
              I18nManager.isRTL ? { right: -4 } : { left: -4 },
            ]}>
            <View
              style={[
                styles.ownGoalsContainer,
                {
                  height: theme.spacing.iconSize,
                  borderRadius: theme.spacing.iconSize,
                  backgroundColor: theme.colors.white,
                  borderColor: theme.colors.error,
                },
                Number(player?.ownGoals) > 1 && I18nManager.isRTL
                  ? { paddingLeft: 3 }
                  : { paddingRight: 3 },
              ]}>
              <View
                style={{
                  flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
                }}>
                {Number(player?.ownGoals) > 1 && (
                  <View
                    style={[
                      I18nManager.isRTL ? { paddingRight: 2 } : { paddingLeft: 2 },
                    ]}>
                    <Text
                      style={[
                        styles.goalsText,
                        {
                          fontSize: theme.typography.goalCountSize,
                          color: theme.colors.newError,
                          fontFamily: theme.typography.fontFamilyBold,
                        },
                      ]}>
                      {player?.ownGoals}
                    </Text>
                  </View>
                )}
                <Image
                  source={ownGoalIcon}
                  style={[
                    styles.assistIcon,
                    {
                      width: theme.spacing.iconSize,
                      height: theme.spacing.iconSize,
                      borderRadius: theme.spacing.iconSize,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        )}

        {/* Goals Scored */}
        {player?.isScorer && (
          <View
            style={[
              styles.footballIconWrapper,
              I18nManager.isRTL
                ? { left: Number(player?.goals) > 1 ? -10 : -2.8 }
                : { right: Number(player?.goals) > 1 ? -10 : -2.8 },
            ]}>
            <View
              style={[
                styles.goalsContainer,
                {
                  height: theme.spacing.iconSize,
                  borderRadius: theme.spacing.iconSize,
                  borderColor: theme.colors.success,
                  backgroundColor: theme.colors.white,
                },
                Number(player?.goals) > 1 && I18nManager.isRTL
                  ? { paddingRight: 3 }
                  : { paddingLeft: 3 },
              ]}>
              <View
                style={{
                  flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
                }}>
                {Number(player?.goals) > 1 && (
                  <View
                    style={[
                      I18nManager.isRTL ? { paddingLeft: 2 } : { paddingRight: 2 },
                    ]}>
                    <Text
                      style={[
                        styles.goalsText,
                        {
                          fontSize: theme.typography.goalCountSize,
                          color: theme.colors.text,
                          fontFamily: theme.typography.fontFamilyBold,
                        },
                      ]}>
                      {player?.goals}
                    </Text>
                  </View>
                )}
                <Image
                  source={footballIcon}
                  style={[
                    styles.footballIcon,
                    {
                      width: theme.spacing.iconSize,
                      height: theme.spacing.iconSize,
                      borderRadius: theme.spacing.iconSize,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        )}

        {/* Yellow Card */}
        {player?.isYellowCard && (
          <View
            style={[
              styles.yellowCardWrapper,
              I18nManager.isRTL ? { left: -8 } : { right: -8 },
            ]}>
            <View
              style={[
                styles.yellowCardContainer,
                {
                  width: theme.spacing.iconSize,
                  height: theme.spacing.iconSize,
                  borderRadius: theme.spacing.iconSize,
                  backgroundColor: theme.colors.white,
                  borderColor: theme.colors.border,
                },
              ]}>
              <View
                style={[
                  styles.yellowCard,
                  {
                    borderRadius: theme.borderRadius.card,
                    backgroundColor: theme.colors.warning,
                  },
                ]}
              />
            </View>
          </View>
        )}

        {/* Red Card */}
        {player?.isRedCard && (
          <View
            style={[
              styles.redCardWrapper,
              I18nManager.isRTL ? { left: -8 } : { right: -8 },
            ]}>
            <View
              style={[
                styles.redCardContainer,
                {
                  width: theme.spacing.iconSize,
                  height: theme.spacing.iconSize,
                  borderRadius: theme.spacing.iconSize,
                  backgroundColor: theme.colors.white,
                  borderColor: theme.colors.border,
                },
              ]}>
              <View
                style={[
                  styles.redCard,
                  {
                    borderRadius: theme.borderRadius.card,
                    backgroundColor: theme.colors.error,
                  },
                ]}
              />
            </View>
          </View>
        )}

        {/* Substitute Icon */}
        {player?.isSubstitute && (
          <View
            style={[
              styles.playerSubstituteWrapper,
              I18nManager.isRTL ? { left: -4 } : { right: -4 },
            ]}>
            <View
              style={[
                styles.playerSubstituteContainer,
                {
                  width: theme.spacing.iconSize,
                  height: theme.spacing.iconSize,
                  backgroundColor: theme.colors.white,
                  borderRadius: theme.spacing.iconSize,
                },
              ]}>
              <Image
                source={renewalIcon}
                style={styles.playerSubstituteIcon}
              />
            </View>
          </View>
        )}
      </View>

      <Text
        numberOfLines={1}
        style={[
          styles.playerName,
          {
            fontSize: theme.typography.playerNameSize,
            color: theme.colors.text,
            fontFamily: theme.typography.fontFamily,
          },
          nameStyle,
        ]}>
        {getFirst10Chars(player?.matchName)}
      </Text>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={() => onPress(player)} activeOpacity={0.7}>
        {cardContent}
      </TouchableOpacity>
    );
  }

  return cardContent;
};

const styles = StyleSheet.create({
  playerCard: {
    position: 'absolute',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerImageContainer: {
    borderWidth: 1,
  },
  playerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  jerseyNumber: {
    position: 'absolute',
    top: -4,
    zIndex: 3,
  },
  jerseyNumberWrapper: {
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jerseyText: {
    includeFontPadding: false,
  },
  assistIconWrapper: {
    position: 'absolute',
    top: 16,
    zIndex: 3,
  },
  assistIcon: {},
  ownGoalsWrapper: {
    position: 'absolute',
    bottom: -1,
    zIndex: 3,
  },
  ownGoalsContainer: {
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footballIconWrapper: {
    position: 'absolute',
    top: -3,
  },
  goalsContainer: {
    borderWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalsText: {
    includeFontPadding: false,
    lineHeight: 13.8,
  },
  footballIcon: {},
  yellowCardWrapper: {
    position: 'absolute',
    top: 16,
  },
  yellowCardContainer: {
    borderWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowCard: {
    width: 6,
    height: 8,
  },
  redCardWrapper: {
    position: 'absolute',
    top: 16,
  },
  redCardContainer: {
    borderWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCard: {
    width: 6,
    height: 8,
  },
  playerSubstituteWrapper: {
    position: 'absolute',
    bottom: -1,
  },
  playerSubstituteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerSubstituteIcon: {
    width: 7.6,
    height: 7.6,
  },
  playerName: {
    marginTop: 2,
  },
});

export default React.memo(PlayerCard);
