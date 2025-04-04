import React from 'react'
import { Image, View, Text, ScrollView, StyleSheet,  Dimensions } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import { useNavigation } from '@react-navigation/native'

export default function Teste3Int(){

    const navigation = useNavigation();
    
    return(
        <View style={localStyles.container}>
            <Image source={require('../../../assets/vector.png')} style={localStyles.Imagem}/>
            <Image source={require('../../../assets/figavaliacao.png')} style={localStyles.Imagem2}/>
            <Text style={GlobalStyles.titulo1}>Avaliando os Cuidados em Saúde Mental</Text>
            <Text style={GlobalStyles.descricao}>Trata de um quiz com 10 questões sobre cuidados de saúde mental, onde são avaliados suas atitudes e comportamentos no dia-a-dia. Ao final é apresentado o resultado com base na pontuação de acertos.</Text>
                <View style={GlobalStyles.botoesTeste}>
                <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Avaliação')} />
                    <BotaoPeqProx title='Próximo' onPress={() => navigation.navigate('Teste3P1')}  />
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