import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView
} from 'react-native'

import BotaoMidias from "../../componentes/Botoes/Midia";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function Series() {
    const series = [
        {
            name: 'The Chair (2021)',
            url: 'https://www.netflix.com/br/title/81206259'
        },
        {
            name: 'Todo Va a Estar Bien (2021)',
            url: 'https://www.netflix.com/br/title/81170234'
        },
        {
            name: 'A Vida e a História de Madam C. J. Walker (2020) ',
            url: 'https://www.netflix.com/br/title/80202462'
        },
        {
            name: 'Gracie and Frankie (2015)',
            url: 'https://www.netflix.com/br/title/80017537'
        },
        {
            name: 'Unbreakable Kimmy Schmidt (2015)',
            url: 'https://www.netflix.com/br/title/80025384'
        },
        {
            name: 'Gilmore Girls (2000)',
            url: 'https://www.netflix.com/br/title/70155618'
        },
        {
            name: 'Amor Ocasional (2018)',
            url: 'https://www.netflix.com/br/title/80190086'
        },
        {
            name: 'Derry Girls (2018)',
            url: 'https://www.netflix.com/br/title/80238565'
        },
        {
            name: 'Insecure (2016)',
            url: 'https://play.hbomax.com/page/urn:hbo:page:GV7xdwg1cosPDWwEAAABT:type:series?source=googleHBOMAX'
        },
        {
            name: 'Modern Family (2009)',
            url: 'https://www.starplus.com/pt-br/series/modern-family/6p2yzz9mh8Kp?distributionPartner=google'
        },
        {
            name: 'Unbreakable Kimmy Schmidt (2015)',
            url: 'https://www.netflix.com/br/title/80025384'
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