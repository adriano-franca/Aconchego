import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView
} from 'react-native'

import BotaoMusicas from "../../componentes/Botoes/Musicas";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function Musicas() {
    const musicas = [
        {
            name: 'Only Time',
            singer: 'Enya',
            url: 'https://www.youtube.com/watch?v=7wfYIMyS_dI'
        },
        {
            name: 'Calma',
            singer: 'Lorena Nunes',
            url: 'https://www.youtube.com/watch?v=1igmMK7CFwM'
        },
        {
            name: 'Vilarejo',
            singer: 'Marisa Monte',
            url: 'https://www.youtube.com/watch?v=WibtVWwW-EA'
        },
        {
            name: "Please don’t go",
            singer: 'Barcelona',
            url: 'https://www.youtube.com/watch?v=-kizV91zQ_0'
        },
        {
            name: 'Rosa Morena',
            singer: 'João Gilberto',
            url: 'https://www.youtube.com/watch?v=4_2jdYEFVJ0'
        },
        {
            name: 'Chateau',
            singer: 'Anguns & Julia Stone',
            url: 'https://www.youtube.com/watch?v=fFHR164mnjg'
        },
        {
            name: 'Dia Clarear',
            singer: 'Banda do Mar',
            url: 'https://www.youtube.com/watch?v=8lNz3x6K1uA'
        },
        {
            name: 'Clair de Lune',
            singer: 'Claude Debussy',
            url: 'https://www.youtube.com/watch?v=CvFH_6DNRCY'
        },
        {
            name: 'Wildflowers',
            singer: 'Tom Petty',
            url: 'https://www.youtube.com/watch?v=Kw8vBDk880k'
        },
        {
            name: 'Me conta da tua janela',
            singer: 'Anavitória',
            url: 'https://www.youtube.com/watch?v=hC0EQGIcbUI'
        },
        {
            name: 'Quem sabe isso quer dizer amor',
            singer: 'Milton Nascimento',
            url: 'https://www.youtube.com/watch?v=1edwebkYvYQ'
        },
        {
            name: 'Travessia',
            singer: 'Milton Nascimento',
            url: 'https://www.youtube.com/watch?v=kDe3qOhrJLo'
        },
        {
            name: 'Maria Maria',
            singer: 'Milton Nascimento',
            url: 'https://www.youtube.com/watch?v=IElS9cxpImA'
        },
        {
            name: 'Canção da América',
            singer: 'Milton Nascimento',
            url: 'https://www.youtube.com/watch?v=fDio3_1AaJ8'
        },
        {
            name: 'Nada será como antes',
            singer: 'Milton Nascimento',
            url: 'https://www.youtube.com/watch?v=8sW461txkqs'
        },
        {
            name: 'Toda forma de amar',
            singer: 'Milton Nascimento',
            url: 'https://www.youtube.com/watch?v=qmtOf2EGTSc'
        },
        {
            name: 'Ninguém',
            singer: 'Fran & Chico Chico',
            url: 'https://www.youtube.com/watch?v=hGeFoBZbDgM'
        },
        {
            name: 'Bom dia, Saudade',
            singer: 'Lorena Nunes',
            url: 'https://www.youtube.com/watch?v=JifwYc0WZJ8'
        },
        {
            name: 'Trem-Bala',
            singer: 'Ana Vilela',
            url: 'https://www.youtube.com/watch?v=6rH07oveQpo'
        },
        {
            name: 'Tá escrito',
            singer: 'Grupo Revelação',
            url: 'https://www.youtube.com/watch?v=xFls0GiYbvw'
        },
        {
            name: 'Onde Deus possa me ouvir',
            singer: 'Vander Lee',
            url: 'https://www.youtube.com/watch?v=qVA2GUPtrrI'
        },
        {
            name: 'O leaozinho',
            singer: 'Caetano Veloso',
            url: 'https://www.youtube.com/watch?v=wJ2prEKx3_Y'
        }
    ]

    return(
        <View style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.buttonsContainer}>
                    {musicas.map((musica, i) => (
                        <View key = {i}>
                            <BotaoMusicas
                                title = {musica.name}
                                singer = {musica.singer}
                                onPress = {() => {Linking.openURL(musica.url)}}
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