import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView
} from 'react-native'

import BotaoMeditacao from "../../componentes/Botoes/Meditacao";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function Autoquestionamento() {
    const meditacaoGuiada = [
        {
            thumb: require(`../../../assets/autoquestionamento/1.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/1.1.jpg`),
            canal: 'Tadashi Kadomoto',
            nome: 'Autobiografia em 5 capítulos',
            url: 'https://www.youtube.com/watch?v=I7Uix0Ym52E'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/2.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/2.1.jpg`),
            canal: 'Corvo Seco',
            nome: 'Eckhart Tolle - Você não é a sua Mente',
            url: 'https://www.youtube.com/watch?v=k1ao3qiO9Z0'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/3.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/3.1.jpg`),
            canal: 'Nanda Bianchi Terapias Holísticas',
            nome: 'Eu Superior: O que é e como acessá-lo',
            url: 'https://www.youtube.com/watch?v=msASKHD6Ha0'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/4.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/4.1.jpg`),
            canal: 'Camila Zen',
            nome: 'O universo dentro de você',
            url: 'https://www.youtube.com/watch?v=e66W0hmkmjs'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/5.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/5.1.jpg`),
            canal: 'Meditando por Juliana Tamietti',
            nome: 'Meditação Guiada: Autocuidado',
            url: 'https://www.youtube.com/watch?v=1h-5ANlUVnY'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/6.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/6.1.jpg`),
            canal: 'Beta Lotti',
            nome: 'Meditação Guiada para autoconhecimento e resgate interior',
            url: 'https://www.youtube.com/watch?v=zdmq-7BLTXI'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/7.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/7.1.jpg`),
            canal: 'Mirian Floriano',
            nome: 'Meditação - Em busca do autoconhecimento',
            url: 'https://www.youtube.com/watch?v=h62sTxxSEu4'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/8.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/8.1.jpg`),
            canal: 'Daniela Mattos - Kundalini Yoga',
            nome: 'Meditação para o autoconhecimento',
            url: 'https://www.youtube.com/watch?v=OSh9biqUeH0'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/9.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/9.1.jpg`),
            canal: 'Camila Zen',
            nome: 'Meditação Guiada | Para o amor próprio',
            url: 'https://www.youtube.com/watch?v=LUHspFWn0q4'
        },
        {
            thumb: require(`../../../assets/autoquestionamento/10.jpg`),
            imgCanal: require(`../../../assets/autoquestionamento/10.1.jpg`),
            canal: 'Meditando por Juliana Tamietti',
            nome: 'Meditação - Quem é você? ',
            url: 'https://www.youtube.com/watch?v=IH6j9_3lu8I'
        },
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