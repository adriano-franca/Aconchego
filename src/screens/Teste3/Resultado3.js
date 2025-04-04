import React from 'react'
import { Text, StyleSheet, View, Dimensions  } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function Resultado3({route}){

    const navigation = useNavigation();

    let resultado = route.params?.resposta

    function resposta3() {
        if (resultado <= 4) {
            return (
                <View style={localStyles.container2}>
                    <Text style={GlobalStyles.titulo1}>Seu resultado requer atenção!</Text>
                    <Text style={GlobalStyles.titulo2}>Tenha muita atenção aos seus hábitos e comportamentos. Adote uma rotina saudável também para sua mente. Pratique atividade física, siga uma alimentação nutritiva e equilibrada, cultive um hobby que lhe dê prazer, conviva com amigos e familiares. E informe-se sobre a depressão, pois a informação é o melhor caminho para identificar os sinais da doença e/ou apoiar quem sofre de depressão.</Text>
                </View>
            )
        } else if (resultado <= 7) {
            return (
                <View style={localStyles.container2}>
                    <Text style={GlobalStyles.titulo1}>Seu resultado foi satisfatório!</Text>
                    <Text style={GlobalStyles.titulo2}>Parabéns, você já está cuidando da sua saúde mental. Mas sempre dá para melhorar, certo? Confira no teste quais respostas você errou e tente incorporar hábitos mais saudáveis ao seu dia a dia. Pratique atividade física, durma bem, siga uma alimentação nutritiva e equilibrada, cultive um hobby que lhe dê prazer, conviva com amigos e familiares. E informe-se sobre a depressão.</Text>
                </View>
            )
        } else {
            return (
                <View style={localStyles.container2}>
                    <Text style={GlobalStyles.titulo1}>Seu resultado foi excelente!</Text>
                    <Text style={GlobalStyles.titulo2}>Excelente, você sabe cuidar da sua saúde mental, parabéns. Ainda assim, vale a pena ampliar seu conhecimento sobre a depressão e saber, além das formas de prevenção, quais são os sinais da doença, os tratamentos e como apoiar quem sofre do transtorno. Disseminar boas informações a respeito da depressão é o caminho para construirmos uma sociedade mais empática.</Text>
                </View>
            )
        }
    }
    
    return(
        <View style={localStyles.container}>
            <View style={localStyles.container2}>
            <Text style={GlobalStyles.resposta}>Resultado</Text>
            </View>
            {resposta3()}
            <View style={localStyles.container2}>
            <Botao title='Preciso de Apoio' onPress={() => navigation.navigate('canais de apoio')}/>
            <Botao title='Voltar à tela de Avaliação' onPress={() => navigation.navigate('Aconchego')}/>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container:{
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
        paddingTop: 20
    },
    container2:{
        alignItems: 'center',
    },

})