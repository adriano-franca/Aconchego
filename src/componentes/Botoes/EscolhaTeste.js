import React from 'react'
import GlobalStyles from '../Global/GlobalStyles';

import { 
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    View
} from 'react-native'

export default function BotaoEscolhaTeste(props){

        return(
            <View style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoTeste} onPress = {props.onPress}>
                    <View style={[GlobalStyles.circulo, {backgroundColor: props.color}]}>
                        <Text style={GlobalStyles.numero}>{props.number}</Text>
                    </View>

                    <Text style={GlobalStyles.textoOpcoes}>    
                        {props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


const localStyles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    }
})