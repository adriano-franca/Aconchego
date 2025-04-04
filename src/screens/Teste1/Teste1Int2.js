import React from 'react'
import { Image, Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import { useNavigation } from '@react-navigation/native'

export default function Teste1Int2(){

    const navigation = useNavigation();
    
    return(
        <View style={localStyles.container}>
            <Image source={require('../../../assets/vector.png')} style={localStyles.Imagem}/>
            <Image source={require('../../../assets/figavaliacao.png')} style={localStyles.Imagem2}/>
            <Text style={GlobalStyles.titulo1}>Instruções</Text>
                    <View style={GlobalStyles.paragrafo}>
                        <Text style={GlobalStyles.descricao}>Por favor, leia cuidadosamente cada uma das afirmações e assinale o número apropriado 0, 1, 2 ou 3.</Text>
                        <Text style={GlobalStyles.descricao}>A pontuação indicará o quanto ela se aplicou a você durante a última semana, conforme as indicações. </Text>
                    </View>
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Teste1Int')} />
                    <BotaoPeqProx title='Próximo' onPress={() => navigation.navigate('Teste1P1')} />
                </View>
                
        </View>
    )
}
const localStyles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
        },
    Imagem: {
        tintColor: '#0066FF',
        height: 80,
        width: 72
    },
    Imagem2: {
        position: "absolute",
        bottom: -1,
        left: 5,
        width: 280,
        height: 160
    }
    }
)