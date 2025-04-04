import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';

import { 
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    View,
    Image
} from 'react-native'

export default class BotaoMeditacao extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
                <TouchableOpacity style={localStyles.container} onPress = {this.props.onPress}>
                    <Image
                        resizeMode='stretch'
                        style={localStyles.thumbnail}
                        source={this.props.thumb}
                    />

                    <View style={GlobalStyles.barra} />

                    <View style={localStyles.descricao}>
                        <View style={localStyles.canalContainer}>
                            <Image
                                style={localStyles.imgCanal}
                                source={this.props.imgCanal}
                            />
                            <Text numberOfLines={1} style={GlobalStyles.canalMeditacao}>{this.props.canal}</Text>
                        </View>

                        <Text style={GlobalStyles.tituloMeditacao}>    
                            {this.props.nome}
                        </Text>
                    </View>
                </TouchableOpacity>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: 94,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    thumbnail: {
        width: 140,
        height: '100%',
    },
    descricao: {
        flex: 1,
        justifyContent: 'flex-start',
        height: '100%',
        paddingRight: 12
    },
    canalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgCanal: {
        width: 22,
        height: 22,
        borderRadius: 11,
        marginRight: 4
    }
});