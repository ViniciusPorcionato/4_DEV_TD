import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { MontserratAlternates_600SemiBold, MontserratAlternates_700Bold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { ForgotPassword } from './src/screens/ForgotPassword/ForgotPassword';
import { CheckEmail } from './src/screens/CheckEmail/CheckEmail';
import { RedefinePassword } from './src/screens/RedefinePassword/RedefinePassword';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import { UserProfile } from './src/screens/UserProfile/UserProfile';
import { MedicalRecord } from './src/screens/MedicalRecord/MedicalRecord';
import { MedicalConsultations } from './src/screens/MedicalConsultations/MedicalConsultations';
import { PatientConsultations } from './src/screens/PatientConsultations/PatientConsultations';
import { SelectMed } from './src/screens/SelectMed/SelectMed';
import { SelectClinic } from './src/screens/SelectClinic/SelectClinic';
import { SelectDate } from './src/screens/SelectDate/SelectDate';
import { ConsultationLocation } from './src/screens/ConsultationLocation/ConsultationLocation';
import { ViewPrescription } from './src/screens/ViewPrescription/ViewPrescription';
import { Main } from './src/screens/Main/Main';


const Stack = createNativeStackNavigator();


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    MontserratAlternates_500Medium

  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (


    //Container - envolve toda a estrutura da navegação
    //Navigator - componente para a navegação
    //Screen - tela
    //name: nome da tela
    //component: componente que será chamado
    //opition(title) : titulo da tela


    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />
        
        <Stack.Screen
          name='Main'
          component={Main}
        />

        {/* <Stack.Screen
        name='Navegacao'
        component={Navegacao}
        options={{title: "Navegação"}}
        /> */}


        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{ title: "ForgotPassword" }}
        />

        <Stack.Screen
          name='CheckEmail'
          component={CheckEmail}
          options={{ title: "CheckEmail" }}
        />

        <Stack.Screen
          name='RedefinePassword'
          component={RedefinePassword}
          options={{ title: "RedefinePassword" }}
        />

        <Stack.Screen
          name='CreateAccount'
          component={CreateAccount}
          options={{ title: "CreateAccount" }}
        />

        <Stack.Screen
          name='UserProfile'
          component={UserProfile}
          options={{ title: "UserProfile" }}
        />

        <Stack.Screen
          name='MedicalRecord'
          component={MedicalRecord}
          options={{ title: "MedicalRecord" }}
        />

        <Stack.Screen
          name='MedicalConsultations'
          component={MedicalConsultations}
          options={{ title: "MedicalConsultations" }}
        />

        <Stack.Screen
          name='PatientConsultations'
          component={PatientConsultations}
          options={{ title: "PatientConsultations" }}
        />
        <Stack.Screen
          name='SelectMed'
          component={SelectMed}
          options={{ title: "SelectMed" }}
        />

        <Stack.Screen
          name='SelectClinic'
          component={SelectClinic}
          options={{ title: "SelectClinic" }}
        />

        <Stack.Screen
          name='SelectDate'
          component={SelectDate}
          options={{ title: "SelectDate" }}
        />

        <Stack.Screen
          name='ConsultationLocation'
          component={ConsultationLocation}
          options={{ title: "ConsultationLocation" }}
        />

        <Stack.Screen
          name='ViewPrescription'
          component={ViewPrescription}
          options={{ title: "ViewPrescription" }}
        />


      </Stack.Navigator>

    </NavigationContainer>


  );
}


