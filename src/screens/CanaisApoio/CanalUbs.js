import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import GlobalColors from '../../componentes/Global/GlobalColors'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function CanalUbs(){
    const navigation = useNavigation();

    return(
        <ScrollView>
        <View style={localStyles.container}>
            <Image source={require('../../../assets/apoio.png')} />
            <Text style={GlobalStyles.titulo1}>Unidade Básica de Atendimento (UBS)</Text>
            <Text style={[GlobalStyles.descricao, {marginTop: 15, marginBottom: 40}]}>As Unidades Básicas de Atendimento (UBS) se configuram como a porta de entrada no Sistema Único de Saúde (SUS). Ao se propor em prestar uma assistência mais próxima da população, torna-se possível a identificação, encaminhamento e acompanhamento de pacientes em sofrimento mental.</Text>
            <Botao title='Voltar' onPress={() => navigation.goBack()}/>
        </View>
        </ScrollView>
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
    }
    }
)