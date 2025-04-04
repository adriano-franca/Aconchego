import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import GlobalColors from '../Global/GlobalColors';

import { 
    View,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native'

export default class BotaoAvaliacao extends Component {
    constructor(props){
        super(props);
    }

     //<ImagemAvaliacao />
    render(){
        return(
            <View style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoAvaliacao} onPress = {this.props.onPress}>
                    <View style={localStyles.containerImagemAvaliacao}>
                        <Image style={localStyles.imagemAvaliacao} source={require('../../../assets/vector.png')}/>
                    </View>

                    <View style={localStyles.containerTexto}>
                        <Text style={GlobalStyles.textoOpcoes}>    
                            {this.props.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    containerImagemAvaliacao: {
        backgroundColor: GlobalColors.CorAcao,
        width: 84,
        height: 88,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: GlobalColors.CorTextoForte,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        marginLeft: -1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        top: 1
    },
    imagemAvaliacao: {
        width: 51,
        height: 57,
    },
    containerTexto: {
        flex: 1,
    }
});