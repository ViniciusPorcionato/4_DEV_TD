import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
   useFonts,
   Poppins_400Regular,
   Poppins_700Bold
  } from '@expo-google-fonts/dev';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <View style={styles.container}>
      <Image
       style={styles.img} 
       source={require('./src/assets/logo-grouploginpage.png')} 
      />
      
      <Text style={styles.titleLogin}>Login</Text>

      <View style={styles.groupInput}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='Digite seu email...'
        />
      </View>

      <View style={styles.groupInput}>
        <Text style={styles.label}>Senha</Text>
        <TextInput 
        style={styles.input}
        placeholder='Digite sua senha...'
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.titleButton}>Entrar</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },

  img:{
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain'
  },

  titleLogin:{
    color: '#7E4E49',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase'

  },

  groupInput: {
    width: '80%',
    
  },


  label:{
    justifyContent: 'start',
    color: '#7E4E49',
    paddingLeft: 10,
    fontSize: 16

  },

  input:{
    height: 40,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#BFC9B1',
    padding: 10
  },

  button:{
    width: 137.5,
    height: 50,
    backgroundColor: '#BFC9B1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#7E4E49'
  },

  titleButton:{
    color: '#7E4E49',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }

});
