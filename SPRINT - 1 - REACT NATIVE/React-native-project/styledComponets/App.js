import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Container } from './src/components/Container/Container';

export default function App() {

  //hook de state
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.warn(`Contador Atualizado : ${count}`)
  },[count])

  //função para incremento
  const incremento = () => {
    setCount(count + 1)
  }

  //função para decrementar
  const decremento = () => {
    setCount(count - 1)
  }

  return (
    <Container>


      <TouchableOpacity onPress={decremento} style={styles.buttonDecrement}>
        <Text style={styles.text}>Decrementar -</Text>
      </TouchableOpacity>

      <Text style={styles.textCount}>Contador: {count} </Text>
      
      <TouchableOpacity onPress={incremento} style={styles.buttonIncrement}>
        <Text style={styles.text}>Incrementar +</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    fontSize: 18
  },

  buttonIncrement: {
    backgroundColor: '#DC143C',
    padding: 8,
    borderRadius: 10,
  },
  buttonDecrement: {
    backgroundColor: '#7B68EE',
    padding: 8,
    borderRadius: 10,
  },
  textCount: {
    fontSize: 18,
    fontStyle: 'bold'
  }

});
