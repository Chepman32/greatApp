import React, { useEffect, useRef, useState } from 'react';
import { Alert, Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';

export function BigAnimation({callback, active, setActive}) {
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(2)
  const animationProgress = useRef(new Animated.Value(0))
  const animationRef = useRef(null)
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 15000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])
  const playToPause = () => {
    callback()
    animationRef.current?.play(0, 20)
    setPlaying(false)
  }

  const pauseToPlay = () => {
    callback()
    setSpeed(4)
    animationRef.current?.play(15, 60)
    setPlaying(true)
  }
  const handler = () => {
    if(playing) {
      playToPause()
    }
    if(!playing) {
      pauseToPlay()
    }
  }
  return (
    <TouchableOpacity style={styles.animationContainer} onPress={() =>playing ? playToPause() : pauseToPlay()}>
      <Lottie
      source={require('../../assets/animations/954-playpause.json')}
      style={styles.mainObject}
      ref={animationRef}
      progress={1000}
      speed={speed}
      loop={false}
      autoSize
    />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: "center",
      },
    mainObject: {
        width: 500,
        height: 500,
    }
})