import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import BotaoCanaisApoio from "../../componentes/Botoes/CanaisApoio";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function CanaisApoio() {
    const navigation = useNavigation();

    return(
        <View style={localStyles.container}>
            <Image style={localStyles.image} source={require('../../../assets/work-from-home.png')} />
            <View style={localStyles.buttonsContainer}>
                <BotaoCanaisApoio
                    title = 'Centro de Valorização da Vida (CVV)'
                    onPress={() => navigation.navigate('CVV')}
                />
                <BotaoCanaisApoio
                    title = 'Pode Falar (UNICEF)'
                    onPress={() => navigation.navigate('UNICEF')}
                />
                <BotaoCanaisApoio
                    title = 'Centro de Atenção Psicossocial (CAPS)'
                    onPress={() => navigation.navigate('CAPS')}
                />
                <BotaoCanaisApoio
                    title = 'Unidade Básica de Atendimento (UBS)'
                    onPress={() => navigation.navigate('UBS')}
                />
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.CorFundo,
    },
    buttonsContainer: {
        paddingVertical: 12,
    },
    image: {
        position: "absolute",
        bottom: 0,
        left: 70,
        width: 240,
        height: 260,
    }
});