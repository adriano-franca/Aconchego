import React from 'react'
import { Text, StyleSheet, Image, ScrollView, View } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function ComoUsar(){
    const navigation = useNavigation();

    return(
        <View style={localStyles.container}>
            <ScrollView>
            <View style={localStyles.container}>
            <Image style={localStyles.logo} source={require('../../assets/logo.png')}/>
            <View>
            <Text style={GlobalStyles.titulo1}>Como Usar</Text>
            <Text style={GlobalStyles.descricao}>O Aconchego possui três funcionalidades:</Text>
            <Text style={GlobalStyles.descricaoComoUsar}>1 - Avaliação onde você irá encontrar 03 testes na área de saúde mental. Estes teste podem lhe ajudar a perceber como está a sua saúde mental, já que possuem o objetivo de identificar sinais e sintomas importantes no âmbito da saúde mental.</Text>
            <Text style={GlobalStyles.descricaoComoUsar}>2 - Apoio onde você terá sugestões de atividades e também encontrará a sugestão de canais de atendimento em saúde mental.</Text>
            <Text style={GlobalStyles.descricaoComoUsar}>3 - Meus registros onde você poderá acompanhar a partir dos seus registros (resultados dos testes e humor) as características da sua saúde mental.</Text>
            </View>
            </View>
            <Botao title='Voltar à Tela Principal' onPress={() => navigation.goBack()}/>
            </ScrollView>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
        textAlign: 'center'
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 35,
        padding: 10,
        width: 200,
        height: 200
    },
}
)