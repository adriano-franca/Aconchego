import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native'
import GlobalColors from '../../componentes/Global/GlobalColors'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function CanalCaps(){
    const navigation = useNavigation();

    return(
        <ScrollView>
        <View style={localStyles.container}>
            <Image source={require('../../../assets/apoio.png')} />
            <Text style={GlobalStyles.titulo1}>Centro de Atenção Psicossocial (CAPS)</Text>
            <Text style={[GlobalStyles.descricao, {marginTop: 15, marginBottom: 40}]}>Os Centros de Atenção Psicossocial (CAPS) nas suas diferentes modalidades são pontos de atenção estratégicos da Rede de Atenção Psicossocial (RAPS): serviços de saúde de caráter aberto e comunitário constituídos por equipe multiprofissional e que atua sob a ótica interdisciplinar e realiza atendimentos nos mais variados âmbitos da saúde mental. No CAPS você encontrará profissionais capacitados e o apoio necessário para um tratamento completo, humanizado e individualizado. </Text>
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