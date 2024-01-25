import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.img} source={require('./src/assets/image-hello.png')} />

      <Text style={styles.title}>Hello World !</Text>

      <TextInput
        style={styles.input}
        defaultValue='exemplo de input'
      />
      
      <TouchableOpacity styles={styles.button}>
        <Text style={styles.titleButton}>Clique Aqui !</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },

  title: {
    fontSize: 50,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'grey',
    color: 'white'

  },

  input: {
    marginTop: 20,
    width: '90%',
    height: 40,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10
  },

  img: {
    width: 200,
    height: 200,
  },

  button: {
    width: '90%',
    height: 50

  },

  titleButton: {
    backgroundColor: '#FAD02C',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  }

});
