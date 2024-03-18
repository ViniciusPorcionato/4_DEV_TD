import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//importar os recursos do expo notification
import * as Notifications from 'expo-notifications';

//solicita permissao de notificacao ao iniciar o app
Notifications.requestPermissionsAsync();

//define como as notificacoes devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({

    //mostrar o alerta quando a notificacao for recebida
    shouldShowAlert: true,
    //reproduz som ao receber notificacao
    shouldPlaySound: true,
    //mostrar quantidade de notificacao(numero de notificacoes no icone do app)
    shouldSetBadge: false

  })
})

export default function App() {

  //funcao para lidar com a chamada de notificacao
  const HandleCallNotifications = async() => {

    //obtem o status da permissão
    const {status} = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("Você não deixou as notificações ativas");
      return;
    }

    //agenda uma notificacao 
    await Notifications.scheduleNotificationAsync({
      content: {
        title:" Bem vindo ao SENAI",
        body: "Notificação Recebida.",
       
      },
      trigger: null
    })

  }
  


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Btn} onPress={() => HandleCallNotifications()}>
        <Text style={styles.Textbtn}>Clique Aqui !</Text>
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
  },
  Btn: {
    width: "80%",
    height: 50,
    backgroundColor: "#5F9EA0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  Textbtn: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
});
