import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';
import Games from './src/components/Games/Games';

//import das fontes
import { useFonts, SingleDay_400Regular  } from "@expo-google-fonts/single-day";

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    SingleDay_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    {
      id: '1', name:'Vinicius', age:'18' 
    },
    {
      id: '2', name:'Mateus', age:'17' 
    },
    {
      id: '3', name:'Guti', age:'17' 
    },
    {
      id: '4', name:'Eduardo', age:'18' 
    }
  ]


  const gamesList = [
    {
      id: '1', name: 'Minecraft', category:'Jogo de Sobrevivência e Construção', releaseDate: 'Versão inicial lançada em 17 de maio de 2009.', description: 'Minecraft é um jogo de sandbox (caixa de areia) que permite aos jogadores explorar um mundo aberto e construir praticamente qualquer coisa que possam imaginar'
    },
    {
      id: '2', name: 'Valorant', category:'Jogo de Tiro em Primeira Pessoa (FPS) tático', releaseDate: '2 de junho de 2020', description: 'Valorant é um jogo de tiro tático desenvolvido e publicado pela Riot Games.'
    },
    {
      id: '3', name: ' Grand Theft Auto V (GTA V)', category:'Jogo de Ação e Aventura em Mundo Aberto', releaseDate: '17 de setembro de 2013', description: 'Grand Theft Auto V, frequentemente abreviado como GTA V, é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar North e publicado pela Rockstar Games.'
    },
  ]


  return (
    <SafeAreaView>

      {/* FlatList */}
      <FlatList
      data={peopleList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Person name={item.name} age={item.age}/>
      )}
      />

      {/* FlatList */}
      <FlatList
      data={gamesList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Games name={item.name} category={item.category} releaseDate={item.releaseDate} description={item.description} />
      )}
      />


      <StatusBar style="auto" />

    </SafeAreaView>
  );
}


