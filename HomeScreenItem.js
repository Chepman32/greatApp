import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Animation } from './LottieAnimation'
import Player from './Player'

export function HomeScreenItem ({title, trackUrl, setActive}) {
  return (
    <TouchableOpacity style={styles.container} onPress={setActive(true)}>
      <View style={styles.homeScreenItemRow}>
        <Player uri={trackUrl || ""} />
        <Text>{title || ""} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "rgba(218, 220, 224, 0.65)"
  },
  homeScreenItemRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  }
})