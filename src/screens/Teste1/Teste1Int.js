import React from 'react'
import { Image, Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import { useNavigation } from '@react-navigation/native'

export default function Teste1Int(){

    const navigation = useNavigation();
    
    return(
        <View style={localStyles.container}>
            <Image source={require('../../../assets/vector.png')} style={localStyles.Imagem}/>
            <Image source={require('../../../assets/figavaliacao.png')} style={localStyles.Imagem2}/>
            <Text style={GlobalStyles.titulo1}>Avaliando Ansiedade, Depressão e Estresse</Text>
            <Text style={GlobalStyles.descricao}>É um instrumento de autorelato com 21 questões, onde são avaliados os sinais e ansiedade, depressão e estresse. Ao final é apresentado um resultado baseado na classificação das 03 dimensões para Normal, Leve, Moderada, Severa e Extremamente Severa.</Text>
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Avaliação')} />
                    <BotaoPeqProx title='Próximo' onPress={() => navigation.navigate('Teste1Int2')} />
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