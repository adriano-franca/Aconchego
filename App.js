import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  IBMPlexSans_600SemiBold as IBMPlexSans_Bold,
  IBMPlexSans_400Regular as IBMPlexSans_Regular,
  IBMPlexSans_500Medium as IBMPlexSans_Medium
} from '@expo-google-fonts/ibm-plex-sans'

import { Entypo } from '@expo/vector-icons'

import Aconchego from './src/screens/Aconchego';
import SaibaMais from './src/screens/saibaMais';
import ComoUsar from './src/screens/ComoUsar';
import Registros from './src/screens/registros';
import GlobalStyles from './src/componentes/Global/GlobalStyles';
import GlobalColors from './src/componentes/Global/GlobalColors';
import CanalCvv from './src/screens/CanaisApoio/CanalCvv';
import CanalCaps from './src/screens/CanaisApoio/CanalCaps';
import CanalUnicef from './src/screens/CanaisApoio/CanalUnicef';
import CanalUbs from './src/screens/CanaisApoio/CanalUbs';
import Musicas from './src/screens/Apoio/musicas';
import Series from './src/screens/Apoio/series';
import Filmes from './src/screens/Apoio/filmes';
import Alimentacao from './src/screens/Apoio/alimentacao';
import CanaisApoio from './src/screens/Apoio/canaisApoio';
import Meditacao from './src/screens/Apoio/meditacao';
import MeditacaoGuiada from './src/screens/Apoio/meditacaoGuiada';
import Autoquestionamento from './src/screens/Apoio/autoquestionamento';
import Mantras from './src/screens/Apoio/mantras';

import Avaliacao from './src/screens/avaliacao';

import Teste1Int from './src/screens/Teste1/Teste1Int'
import Teste1Int2 from './src/screens/Teste1/Teste1Int2'
import Teste1P1 from './src/screens/Teste1/Pergunta1-1'
import Teste1P2 from './src/screens/Teste1/Pergunta1-2'
import Teste1P3 from './src/screens/Teste1/Pergunta1-3'
import Teste1P4 from './src/screens/Teste1/Pergunta1-4'
import Teste1P5 from './src/screens/Teste1/Pergunta1-5'
import Teste1P6 from './src/screens/Teste1/Pergunta1-6'
import Teste1P7 from './src/screens/Teste1/Pergunta1-7'
import Teste1P8 from './src/screens/Teste1/Pergunta1-8'
import Teste1P9 from './src/screens/Teste1/Pergunta1-9'
import Teste1P10 from './src/screens/Teste1/Pergunta1-10'
import Teste1P11 from './src/screens/Teste1/Pergunta1-11'
import Teste1P12 from './src/screens/Teste1/Pergunta1-12'
import Teste1P13 from './src/screens/Teste1/Pergunta1-13'
import Teste1P14 from './src/screens/Teste1/Pergunta1-14'
import Teste1P15 from './src/screens/Teste1/Pergunta1-15'
import Teste1P16 from './src/screens/Teste1/Pergunta1-16'
import Teste1P17 from './src/screens/Teste1/Pergunta1-17'
import Teste1P18 from './src/screens/Teste1/Pergunta1-18'
import Teste1P19 from './src/screens/Teste1/Pergunta1-19'
import Teste1P20 from './src/screens/Teste1/Pergunta1-20'
import Teste1P21 from './src/screens/Teste1/Pergunta1-21'
import Teste1R1 from './src/screens/Teste1/Resultado'

//Telas teste 2
import Teste2Int from './src/screens/Teste2/Teste2Int'
import Teste2P1 from './src/screens/Teste2/Pergunta2-1'
import Teste2P2 from './src/screens/Teste2/Pergunta2-2'
import Teste2P3 from './src/screens/Teste2/Pergunta2-3'
import Teste2P4 from './src/screens/Teste2/Pergunta2-4'
import Teste2P5 from './src/screens/Teste2/Pergunta2-5'
import Teste2P6 from './src/screens/Teste2/Pergunta2-6'
import Teste2P7 from './src/screens/Teste2/Pergunta2-7'
import Teste2P8 from './src/screens/Teste2/Pergunta2-8'
import Teste2P9 from './src/screens/Teste2/Pergunta2-9'
import Teste2P10 from './src/screens/Teste2/Pergunta2-10'
import Teste2P11 from './src/screens/Teste2/Pergunta2-11'
import Teste2P12 from './src/screens/Teste2/Pergunta2-12'
import Teste2P13 from './src/screens/Teste2/Pergunta2-13'
import Teste2P14 from './src/screens/Teste2/Pergunta2-14'
import Teste2P15 from './src/screens/Teste2/Pergunta2-15'
import Teste2P16 from './src/screens/Teste2/Pergunta2-16'
import Teste2P17 from './src/screens/Teste2/Pergunta2-17'
import Teste2R1 from './src/screens/Teste2/Resultado2-2'
import Teste2R2 from './src/screens/Teste2/Resultado2-1'

//Telas teste 3

import Teste3Int from './src/screens/Teste3/Teste3Int'
import Teste3P1 from './src/screens/Teste3/Pergunta3-1'
import Teste3P2 from './src/screens/Teste3/Pergunta3-2'
import Teste3P3 from './src/screens/Teste3/Pergunta3-3'
import Teste3P4 from './src/screens/Teste3/Pergunta3-4'
import Teste3P5 from './src/screens/Teste3/Pergunta3-5'
import Teste3P6 from './src/screens/Teste3/Pergunta3-6'
import Teste3P7 from './src/screens/Teste3/Pergunta3-7'
import Teste3P8 from './src/screens/Teste3/Pergunta3-8'
import Teste3P9 from './src/screens/Teste3/Pergunta3-9'
import Teste3P10 from './src/screens/Teste3/Pergunta3-10'
import Teste3R1 from './src/screens/Teste3/Resultado3-1'
import Teste3R2 from './src/screens/Teste3/Resultado3-2'
import Teste3R3 from './src/screens/Teste3/Resultado3-3'
import Teste3R4 from './src/screens/Teste3/Resultado3-4'
import Teste3R5 from './src/screens/Teste3/Resultado3-5'
import Teste3R6 from './src/screens/Teste3/Resultado3-6'
import Teste3R7 from './src/screens/Teste3/Resultado3-7'
import Teste3R8 from './src/screens/Teste3/Resultado3-8'
import Teste3R9 from './src/screens/Teste3/Resultado3-9'
import Teste3R10 from './src/screens/Teste3/Resultado3-10'
import Teste3R from './src/screens/Teste3/Resultado3';
import BackButton from './src/componentes/Botoes/HeaderBackButton';

enableScreens();

const Stack = createStackNavigator();

const createScreen = (name, component, title) => ({
  name,
  component,
  options: {
    headerLeft: () => <BackButton />,
    title: title,
    headerTitleStyle: GlobalStyles.headerTitle,
  },
});

export default function App({}) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ IBMPlexSans_Regular, IBMPlexSans_Medium, IBMPlexSans_Bold });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              headerTitleAlign:'center',
              headerTitleStyle: GlobalStyles.header,
              headerStyle: GlobalStyles.headerStyle,
              headerBackTitleVisible: false,
              headerBackImage: () => <Entypo name='chevron-left' size={40} color={GlobalColors.CorTextoForte} style={{marginRight: -15}} />}}>
                
          <Stack.Screen name='Aconchego' component={Aconchego} options={{headerShown: false}} />

          <Stack.Screen name='sobre o aconchego' component={SaibaMais} />

          <Stack.Screen name='como usar' component={ComoUsar} />

          <Stack.Screen name='músicas' component={Musicas} />

          <Stack.Screen name='séries' component={Series} />

          <Stack.Screen name='filmes' component={Filmes} />

          <Stack.Screen name='alimentação' component={Alimentacao} />

          <Stack.Screen name='canais de apoio' component={CanaisApoio} />

          <Stack.Screen name='CVV' component={CanalCvv} />

          <Stack.Screen name='UNICEF' component={CanalUnicef} />

          <Stack.Screen name='CAPS' component={CanalCaps} />

          <Stack.Screen name='UBS' component={CanalUbs} />
          
          <Stack.Screen name='meditação' component={Meditacao} />
          
          <Stack.Screen name='meditação guiada' component={MeditacaoGuiada} />
          
          <Stack.Screen name='autoquestionamento' component={Autoquestionamento} />
          
          <Stack.Screen name='mantras' component={Mantras} />

          <Stack.Screen name='Avaliação' component={Avaliacao} />

          {/* Teste 1 Screens */}
          <Stack.Screen {...createScreen('Teste1Int', Teste1Int, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1Int2', Teste1Int2, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P1', Teste1P1, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P2', Teste1P2, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P3', Teste1P3, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P4', Teste1P4, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P5', Teste1P5, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P6', Teste1P6, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P7', Teste1P7, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P8', Teste1P8, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P9', Teste1P9, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P10', Teste1P10, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P11', Teste1P11, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P12', Teste1P12, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P13', Teste1P13, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P14', Teste1P14, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P15', Teste1P15, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P16', Teste1P16, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P17', Teste1P17, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P18', Teste1P18, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P19', Teste1P19, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P20', Teste1P20, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1P21', Teste1P21, 'Avaliando Ansiedade, Depressão e Estresse')} />
          <Stack.Screen {...createScreen('Teste1R1', Teste1R1, 'Avaliando Ansiedade, Depressão e Estresse')} />

          {/* Teste 2 Screens */}
          <Stack.Screen {...createScreen('Teste2Int', Teste2Int, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P1', Teste2P1, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P2', Teste2P2, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P3', Teste2P3, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P4', Teste2P4, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P5', Teste2P5, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P6', Teste2P6, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P7', Teste2P7, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P8', Teste2P8, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P9', Teste2P9, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P10', Teste2P10, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P11', Teste2P11, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P12', Teste2P12, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P13', Teste2P13, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P14', Teste2P14, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P15', Teste2P15, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P16', Teste2P16, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2P17', Teste2P17, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2R1', Teste2R1, 'Avaliando o Sofrimento Mental')} />
          <Stack.Screen {...createScreen('Teste2R2', Teste2R2, 'Avaliando o Sofrimento Mental')} />

          {/* Teste 3 Screens */}
          <Stack.Screen {...createScreen('Teste3Int', Teste3Int, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P1', Teste3P1, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P2', Teste3P2, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P3', Teste3P3, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P4', Teste3P4, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P5', Teste3P5, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P6', Teste3P6, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P7', Teste3P7, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P8', Teste3P8, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P9', Teste3P9, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3P10', Teste3P10, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R1', Teste3R1, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R2', Teste3R2, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R3', Teste3R3, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R4', Teste3R4, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R5', Teste3R5, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R6', Teste3R6, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R7', Teste3R7, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R8', Teste3R8, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R9', Teste3R9, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R10', Teste3R10, 'Avaliando os Cuidados em Saúde Mental')} />
          <Stack.Screen {...createScreen('Teste3R', Teste3R, 'Avaliando os Cuidados em Saúde Mental')} />


          <Stack.Screen name='meus registros' component={Registros} />

        </Stack.Navigator>

    </NavigationContainer>
    </GestureHandlerRootView>
)}