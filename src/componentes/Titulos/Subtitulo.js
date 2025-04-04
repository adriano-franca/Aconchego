import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

export default class SubTitulo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={localStyles.container}>
                <Text style = {GlobalStyles.titulo2}>
                    {this.props.title}
                </Text>
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
    }
});