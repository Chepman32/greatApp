import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { BigHomescreenItem } from "./BigHomescreenItem"
import { items } from '../../data'

export default function BigHomescreen() {
  const [active, setActive] = useState(false)
  return (
    <View style={styles.container} >
        <BigHomescreenItem key={items[0].uri}/>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})