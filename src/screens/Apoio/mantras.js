import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView
} from 'react-native'

import BotaoMeditacao from "../../componentes/Botoes/Meditacao";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function Mantras() {
    const meditacaoGuiada = [
        {
            thumb: require(`../../../assets/mantras/1.jpg`),
            imgCanal: require(`../../../assets/mantras/1.1.jpg`),
            canal: 'MenteCalma',
            nome: 'Música Reiki - Cura Profunda: Emocional, Física, Energética e Espiritual',
            url: 'https://www.youtube.com/watch?v=5eIH6sSl7Lk'
        },
        {
            thumb: require(`../../../assets/mantras/2.jpg`),
            imgCanal: require(`../../../assets/mantras/2.1.jpg`),
            canal: 'Butterfly Terapias',
            nome: 'Mantra Ganesha Remove Obstáculos e traz a Prosperidade',
            url: 'https://www.youtube.com/watch?v=hlq282HUkGw'
        },
        {
            thumb: require(`../../../assets/mantras/3.jpg`),
            imgCanal: require(`../../../assets/mantras/3.1.jpg`),
            canal: 'Relaxar e Meditar',
            nome: 'Mantra para Meditação, Música para Meditação, Poderosa Mandala, Geometria Sagrada',
            url: 'https://www.youtube.com/watch?v=pXoQlCg5zSc'
        },
        {
            thumb: require(`../../../assets/mantras/4.jpg`),
            imgCanal: require(`../../../assets/mantras/4.1.jpg`),
            canal: 'Clube de Meditação',
            nome: 'Som do Mantra Sagrado OM | Mantra de Cura | Meditação para Paz e Amor',
            url: 'https://www.youtube.com/watch?v=1nSF8SNzbvI'
        },
        {
            thumb: require(`../../../assets/mantras/5.jpg`),
            imgCanal: require(`../../../assets/mantras/5.1.jpg`),
            canal: 'MenteCalma',
            nome: 'Reiki para Dormir, Cura Emocional e Espiritual, Limpa o Coração e a Alma',
            url: 'https://www.youtube.com/watch?v=dS4DYL0w8BM'
        }
    ]

    return(
        <View style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.buttonsContainer}>
                    {meditacaoGuiada.map((video, i) => (
                        <View key = {i}>
                            <BotaoMeditacao
                                nome = {video.nome}
                                canal = {video.canal}
                                thumb = {video.thumb}
                                imgCanal = {video.imgCanal}
                                onPress = {() => {Linking.openURL(video.url)}}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
        // <View style={localStyles.container}>
        //     <ScrollView>
        //         <View style={localStyles.buttonsContainer}>
        //             {series.map((serie, i) => (
        //                 <View key = {i}>
        //                     <BotaoMidias
        //                         title = {serie.name}
        //                         onPress = {() => {Linking.openURL(serie.url)}}
        //                     />
        //             </View>
        //             ))}
        //         </View>
        //     </ScrollView>
        // </View>
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