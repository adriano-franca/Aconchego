import React from "react";
import {
    View,
    StyleSheet,
    Image
} from 'react-native'

import Titulo from "../componentes/Titulos/Titulo";
import BotaoAvaliacao from '../componentes/Botoes/Avaliacao'
import GlobalColors from "../componentes/Global/GlobalColors";
import { useNavigation } from '@react-navigation/native'

export default function Avaliacao() {
    const navigation = useNavigation();

    return(
        <View style={localStyles.container}>
            <Image style={localStyles.imagem} source={require('../../assets/figavaliacao.png')}/>

            <Titulo
                title = 'Escolha um teste para responder'
            />

            <View style={localStyles.botoesAvaliacao}>
                <BotaoAvaliacao
                    onPress={() => navigation.navigate('Teste1Int')}
                    title = 'Avaliando ansiedade, depressão e estresse'
                />
                <BotaoAvaliacao
                    onPress={() => navigation.navigate('Teste2Int')}
                    title = 'Avaliando o sofrimento mental'
                />
                <BotaoAvaliacao
                onPress={() => navigation.navigate('Teste3Int')}
                    title = 'Avaliando os cuidados em saúde mental'
                />
            </View>

        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
        paddingTop: 36,
    },
    botoesAvaliacao: {
        marginTop: 6
    },
    imagem: {
        position: "absolute",
        bottom: -1,
        left: 5,
        width: 280,
        height: 160
    }
});