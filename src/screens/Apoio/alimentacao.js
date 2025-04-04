import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView
} from 'react-native'

import BotaoAlimentacao from "../../componentes/Botoes/Alimentacao";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function Alimentacao() {
    const videosAlimentacao = [
        {
            name: 'IMC - Você sabe Calcular?',
            url: 'https://www.youtube.com/watch?v=S7ES9GVIG3U'
        },
        {
            name: '10 Alimentos que parecem saudáveis, mas não são!',
            url: 'https://www.youtube.com/watch?v=9YqFKwvU4Bc'
        },
        {
            name: 'Alimentos que causam pedras no rins! Cuidados importantes',
            url: 'https://www.youtube.com/watch?v=oEwD4HUpU0c'
        },
        {
            name: 'Como é a consulta com nutricionista?',
            url: 'https://www.youtube.com/watch?v=PxU2UQKQ1RA'
        },
        {
            name: 'Atum em lata é saudável? Em óleo ou água?',
            url: 'https://www.youtube.com/watch?v=-zZzXgitxoM'
        },
        {
            name: 'Os benefícios do ômega 3 para a saúde e como escolher um bom',
            url: 'https://www.youtube.com/watch?v=DA1QWhjJdoo'
        },
        {
            name: 'Qual açúcar é mais saudável e podemos usar?',
            url: 'https://www.youtube.com/watch?v=_pF3hT-FIbs'
        },
        {
            name: '6 melhores frutas para o fígado - Limpar e Proteger',
            url: 'https://www.youtube.com/watch?v=OFSXR7F5Ecs'
        },
        {
            name: 'Diferenças Entre Gasto Energético Basal, Total e Valor Energético Total',
            url: 'https://www.youtube.com/watch?v=S0OaMCrCiYY'
        },
    ]

    return(
        <View style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.buttonsContainer}>
                    {videosAlimentacao.map((video, i) => (
                        <View key = {i}>
                            <BotaoAlimentacao
                                title = {video.name}
                                onPress = {() => {Linking.openURL(video.url)}}
                            />
                    </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.CorFundo,
    },
    buttonsContainer: {
        paddingVertical: 12
    }
});