import React from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import GlobalColors from '../Global/GlobalColors';
import { 
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'

export default function BotaoEmoji (props) {
        // Troca da imagem do emoji
        let emoji;

        if (props.emoji == "normal") {
            emoji = require('../../../assets/normall.png');
        } else if (props.emoji == "triste") {
            emoji = require('../../../assets/sad.png');
        } else if (props.emoji == "feliz") {
            emoji = require('../../../assets/happy.png');
        }
        
        return(
            <View style={localStyles.container}>
                <TouchableOpacity
                    style={[GlobalStyles.butaoEmoji, {backgroundColor: props.color}]}
                    onPress = {props.onPress}>
                    <Image style={localStyles.emoji} source={emoji}/>
                </TouchableOpacity>
            </View>
        )
    }

const localStyles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {    
        width: 60,
        height: 60
    }
});