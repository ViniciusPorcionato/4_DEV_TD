import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Container } from './src/components/Container/Container';
import { ButtonDecrement, ButtonIncrement } from './src/components/Button/Button';
import { TitleButton, TitleCount } from './src/components/Title/Title';

export default function App() {

  //hook de state
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.warn(`Contador Atualizado : ${count}`)
  }, [count])

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
      <ButtonIncrement onPress={decremento} >
        <TitleButton>Decrementar -</TitleButton>
      </ButtonIncrement>

      <TitleCount>Contador: {count} </TitleCount>
      
      <ButtonDecrement onPress={incremento}>
        <TitleButton>Incrementar +</TitleButton>
      </ButtonDecrement>

      <StatusBar style="auto" />
    </Container>
  );
}

