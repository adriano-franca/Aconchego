import React, { Component } from 'react';
import GlobalStyles from '../Global/GlobalStyles';
import {
    TouchableOpacity, 
    Text
} from 'react-native'

export default class BotaoPequeno extends Component{
    constructor(props){
        super(props);
    }

    render(){
            return(
                <TouchableOpacity style={GlobalStyles.botaopeqprox} onPress = {this.props.onPress}>
                    <Text style={GlobalStyles.textoBotao}>    
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            )
        }
}