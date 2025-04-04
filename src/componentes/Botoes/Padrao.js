import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import { 
    View,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

export default class BotaoPadrao extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butao} onPress = {this.props.onPress}>
                    <Text style={GlobalStyles.textoBotao}>    
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    }
});