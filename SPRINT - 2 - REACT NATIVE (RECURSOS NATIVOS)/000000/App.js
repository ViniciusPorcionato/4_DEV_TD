import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Camera } from 'expo-camera';
import { useEffect } from 'react';


export default function App() {

  useEffect(() => {
    (async () => {
      const {status: cameraStatus} = await Camera.requestCameraPermissionsAsync()
    })();
  },[])

  return (
    <View style={styles.container}>
      <Camera
      style={styles.camera}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  camera:{
    flex: 1,
    height: '80%',
    width: '100%'
  },

});
