import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Animation } from './LottieAnimation';

var Sound = require('react-native-sound');


Sound.setCategory('Playback');


const Player = ({uri}) => {
  const [playing, setPlaying] = useState();
  var audio = useRef(new Sound(
    uri || 'https://cdn.pixabay.com/download/audio/2023/01/01/audio_816821e627.mp3?filename=relaxed-vlog-131746.mp3',
    null,
    error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // if loaded successfully
      console.log(
        'duration in seconds: ' +
          audio.current.getDuration() +
          'number of channels: ' +
          audio.current.getNumberOfChannels(),
      );
    },
  ))
  useEffect(() => {
    audio.current.setVolume(1);
    return () => {
      audio.release();
    };
  }, []);
  const playPause = () => {
    if (audio.current.isPlaying()) {
      audio.current.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      audio.current.play(success => {
        if (success) {
          setPlaying(false);
          console.log('successfully finished playing');
        } else {
          setPlaying(false);
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };
  return (
    <View style={styles.container}>
      <Animation callback={playPause} active={playing} setActive={setPlaying} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtn: {
    padding: 20,
  },
});
export default Player;