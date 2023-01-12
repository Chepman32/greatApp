import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { BigAnimation } from './BigAnimation';
const tracks = [
  "https://cdn.pixabay.com/download/audio/2021/09/30/audio_876c935347.mp3?filename=october-8902.mp3",
  "https://cdn.pixabay.com/download/audio/2021/12/30/audio_f4616467f4.mp3?filename=his-touch-long-13135.mp3",
  "https://cdn.pixabay.com/download/audio/2022/01/18/audio_ea75bab6d8.mp3?filename=morning-garden-acoustic-chill-15013.mp3",
  "https://cdn.pixabay.com/download/audio/2022/03/07/audio_48408439d8.mp3?filename=mindfulness-relaxation-amp-meditation-music-22174.mp3",
  "https://cdn.pixabay.com/download/audio/2022/06/10/audio_1b76478b26.mp3?filename=frequency-of-sleep-meditation-113050.mp3",
  "https://cdn.pixabay.com/download/audio/2022/10/30/audio_ba02fef115.mp3?filename=relaxing-music-vol1-124477.mp3",
  "https://cdn.pixabay.com/download/audio/2022/09/06/audio_eacbcf15ac.mp3?filename=relaxing-music-119247.mp3",
  'https://cdn.pixabay.com/download/audio/2023/01/01/audio_816821e627.mp3?filename=relaxed-vlog-131746.mp3'
]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const index = getRandomInt(0, tracks.length - 1)

var Sound = require('react-native-sound');


Sound.setCategory('Playback');

var audio = new Sound(
  tracks[index],
  null,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log(
      'duration in seconds: ' +
        audio.getDuration() +
        'number of channels: ' +
        audio.getNumberOfChannels(),
    );
  },
);
export const BigPlayer = () => {
  const [playing, setPlaying] = useState();
  useEffect(() => {
    audio.setVolume(1);
    return () => {
      audio.release();
    };
  }, []);
  const playPause = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      audio.play(success => {
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
      <TouchableOpacity onPress={playPause}>
        <Text style={styles.playBtn}>
          {
            playing ? "Pause" : "Play"
          }
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtn: {
    padding: 20,
    fontSize: 30,
    fontWeight: "500",
    backgroundColor: "rgba(218, 220, 224, 0.65)",
    overflow: "hidden",
    borderRadius: 10,
  },
});
