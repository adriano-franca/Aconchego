import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import GlobalColors from '../../componentes/Global/GlobalColors'

import MenuApoio from '../../componentes/Botoes/MenuApoio'

export default function SaibaMais(){
    return(
        <View style={localStyles.container}>
            <MenuApoio />
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    }
})