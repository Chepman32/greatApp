import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { items } from "./data"
import { HomeScreenItem } from './HomeScreenItem'

export default function HomeScreen() {
  const [active, setActive] = useState(false)
  return (
    <View style={styles.container} >
        {
            items.map((i) => <HomeScreenItem key={i.uri} title={i.title} trackUri={i.uri} setActive={setActive}/>)
        }
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