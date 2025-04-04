import React from 'react'
import { Text, StyleSheet, View, Image, Linking, ScrollView, Dimensions } from 'react-native'
import GlobalColors from '../../componentes/Global/GlobalColors'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import Botao from '../../componentes/Botoes/Padrao'

export default function CanalUnicef(){
    return(
        <ScrollView>
        <View style={localStyles.container}>
            <Image source={require('../../../assets/apoio.png')} />
            <Text style={GlobalStyles.titulo1}>Pode Falar(UNICEF)</Text>
            <Text style={[GlobalStyles.descricao, {marginTop: 15, marginBottom: 40}]}>Pode Falar é um canal de ajuda em saúde mental para você que tem de 13 a 24 anos desenvolvido pela Unicef em parceria com outros projetos, a exemplo do CVV. Através do site é possível consultar o cronograma de atendimento e agendar sua consulta on-line.</Text>
            <Botao title='Acessar' onPress={() => {Linking.openURL('https://www.podefalar.org.br/')}}/>
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
    },
}
)