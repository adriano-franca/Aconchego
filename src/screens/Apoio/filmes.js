import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView
} from 'react-native'

import BotaoMidias from "../../componentes/Botoes/Midia";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function Filmes() {
    const series = [
        {
            name: 'Um banho de Vida (2019)',
            url: 'https://www.netflix.com/br/title/81078961'
        },
        {
            name: 'Mimi (2021)',
            url: 'https://www.netflix.com/br/title/81267360'
        },
        {
            name: 'Você nem Imagina (2020)',
            url: 'https://www.netflix.com/br/title/81005150'
        },
        {
            name: 'Meu eterno talvez (2019)',
            url: 'https://www.netflix.com/br/title/80202874'
        },
        {
            name: 'Viver duas vezes (2019)',
            url: 'https://www.netflix.com/br/title/80233408'
        },
        {
            name: 'A sociedade dos Poetas Mortos (1989)',
            url: 'https://vizer.tv/filme/online/sociedade-dos-poetas-mortos'
        },
        {
            name: 'Patch Adams O Amor É Contagioso (1998)',
            url: 'https://www.youtube.com/watch?v=tOP72G7EMGw'
        },
    ]

    return(
        <View style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.buttonsContainer}>
                    {series.map((serie, i) => (
                        <View key = {i}>
                            <BotaoMidias
                                title = {serie.name}
                                onPress = {() => {Linking.openURL(serie.url)}}
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