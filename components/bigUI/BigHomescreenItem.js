import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { BigPlayer } from './BigPlayer'

export function BigHomescreenItem ({}) {
  return (
    <View style={styles.container}>
      <BigPlayer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeScreenItemRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  }
})