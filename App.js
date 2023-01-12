import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import BigHomescreen from './components/bigUI/BigHomescreen';
import videoFile from "./assets/video/Untitled.mp4"
import HomeScreen from './HomeScreen';
const videos = [
  require("./assets/video/Water_32423.mp4"),
  require("./assets/video/Cat_3740.mp4"),
  require("./assets/video/Rock_Balance_42470.mp4"),
  require("./assets/video/Summer_24541.mp4"),
  require("./assets/video/Wave_49131.mp4"),
  require("./assets/video/Untitled.mp4"),
  require("./assets/video/5192.mp4"),
  require("./assets/video/Bubbles_26067.mp4"),
]

const App = () => {
  const [currentVideo, setCurrentVideo] = useState("")
  useEffect(() => {
    changeVideo()
    const backChanger = setInterval(changeVideo, 10000)
    return () => {
      clearInterval(backChanger)
    }
  }, [])
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  const changeVideo = () => {
    const index = getRandomInt(0, videos.length - 1)
    setCurrentVideo(videos[index])
  }
  return (
    <View style={styles.mainContainer}>
      <Video
    source={currentVideo}
    repeat
    resizeMode="cover"
    style={styles.video}
/>
<BigHomescreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#546",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    color: 'black'
  },

  button: {
    justifyContent: 'center',
    width: '50%',
    padding: 5,
    backgroundColor: '#00B8D4',
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 21
  },

  childView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider: {
    borderWidth: 2,
    width: '100%',
    borderColor: 'red',
    marginTop: 20
  },
});

export default App;
