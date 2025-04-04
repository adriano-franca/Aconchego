import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Titulo from "../../componentes/Titulos/Titulo";
import BotaoMeditacao from "../../componentes/Botoes/Meditacao";
import BotaoPadrao from "../../componentes/Botoes/Padrao";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function Meditacao() {
    const navigation = useNavigation();

    return(
        <View style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.buttonsContainer}>
                        <View style={localStyles.secao}>
                            <Titulo 
                                title = 'Meditação Guiada'
                            />
                            <BotaoMeditacao
                                nome = 'Meditação para ansidade (Guiada)'
                                canal = 'Tadashi Kadomoto'
                                thumb = {require(`../../../assets/guiada/1.jpg`)}
                                imgCanal = {require(`../../../assets/guiada/1.1.jpg`)}
                                onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=cuAGVyfCt5o')}}
                            />
                            <BotaoMeditacao
                                nome = 'Meditação Guiada (Autohipnose)'
                                canal = 'Poetoterapia por Lázaro Ramon'
                                thumb = {require(`../../../assets/guiada/2.jpg`)}
                                imgCanal = {require(`../../../assets/guiada/2.1.jpg`)}
                                onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=7x2AXkpjG8U')}}
                            />
                            <BotaoPadrao
                                onPress={() => navigation.navigate('meditação guiada')}
                                title = 'Ver todos'
                            />
                        </View>


                        <View style={localStyles.secao}>
                            <Titulo 
                                title = 'Autoquestionamento'
                            />
                            <BotaoMeditacao
                                nome = 'Autobiografia em 5 capítulos'
                                canal = 'Tadashi Kadomoto'
                                thumb = {require(`../../../assets/autoquestionamento/1.jpg`)}
                                imgCanal = {require(`../../../assets/autoquestionamento/1.1.jpg`)}
                                onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=I7Uix0Ym52E')}}
                            />
                            <BotaoMeditacao
                                nome = 'Eckhart Tolle - Você não é a sua Mente'
                                canal = 'Corvo Seco'
                                thumb = {require(`../../../assets/autoquestionamento/2.jpg`)}
                                imgCanal = {require(`../../../assets/autoquestionamento/2.1.jpg`)}
                                onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=cuAGVyfCt5o')}}
                            />
                            <BotaoPadrao
                                onPress={() => navigation.navigate('autoquestionamento')}
                                title = 'Ver todos'
                            />
                        </View>

                        <View style={localStyles.secao}>
                            <Titulo 
                                title = 'Mantras'
                            />
                            <BotaoMeditacao
                                nome = 'Música Reiki - Cura Profunda: Emocional, Física, Energética e Espiritual'
                                canal = 'MenteCalma'
                                thumb = {require(`../../../assets/mantras/1.jpg`)}
                                imgCanal = {require(`../../../assets/mantras/1.1.jpg`)}
                                onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=5eIH6sSl7Lk')}}
                            />
                            <BotaoMeditacao
                                nome = 'Mantra Ganesha Remove Obstáculos e traz a Prosperidade'
                                canal = 'Butterfly Terapias'
                                thumb = {require(`../../../assets/mantras/2.jpg`)}
                                imgCanal = {require(`../../../assets/mantras/2.1.jpg`)}
                                onPress = {() => {Linking.openURL('https://www.youtube.com/watch?v=hlq282HUkGw')}}
                            />
                            <BotaoPadrao
                                onPress={() => navigation.navigate('mantras')}
                                title = 'Ver todos'
                            />
                        </View>
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
    },
    secao: {
        marginTop: 10,
        marginBottom: 20
    }
});