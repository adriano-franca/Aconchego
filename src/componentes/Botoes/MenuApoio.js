import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';

import { 
    ScrollView,
    Image,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    View,
    Linking
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import GlobalColors from '../Global/GlobalColors';

export default function MenuApoio () {

    const navigation = useNavigation();
        
    return(
        <ScrollView>
        <View style={localStyles.container}> 
            <View style={localStyles.botoes}>
                <TouchableOpacity onPress={() => navigation.navigate('meditação')}>
                    <View style={localStyles.containerImagem}>
                        <View style={localStyles.botaoImagem}>
                            <Image resizeMode='contain' style={localStyles.imagem} source={require('../../../assets/icon_zen.png')} /> 
                        </View>
                        <Text style={GlobalStyles.nomes}>Meditação</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {Linking.openURL('https://open.spotify.com/show/7qAi5cjDUt8HbKjekWBcAI?si=a6137ca102fa465a&nd=1')}}>
                    <View style={localStyles.containerImagem}>
                        <View style={localStyles.botaoImagem}>
                            <Image resizeMode='contain' style={localStyles.imagem} source={require('../../../assets/fones.png')} /> 
                        </View>
                        <Text style={GlobalStyles.nomes}>LISAMCAST</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('músicas')}>
                    <View style={localStyles.containerImagem}>
                        <View style={localStyles.botaoImagem}>
                            <Image resizeMode='contain' style={localStyles.imagem} source={require('../../../assets/icon_music.png')} /> 
                        </View>
                        <Text style={GlobalStyles.nomes}>Músicas</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('alimentação')}>
                    <View style={localStyles.containerImagem}>
                        <View style={localStyles.botaoImagem}>
                            <Image resizeMode='contain' style={localStyles.imagem} source={require('../../../assets/Food.png')} /> 
                        </View>
                        <Text style={GlobalStyles.nomes}>Alimentação</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('filmes')}>
                    <View style={localStyles.containerImagem}>
                        <View style={localStyles.botaoImagem}>
                            <Image resizeMode='contain' style={localStyles.imagem} source={require('../../../assets/movies.png')} /> 
                        </View>
                        <Text style={GlobalStyles.nomes}>Filmes</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('séries')}>
                    <View style={localStyles.containerImagem}>
                        <View style={localStyles.botaoImagem}>
                            <Image resizeMode='contain' style={localStyles.imagem} source={require('../../../assets/icon_tv.png')} /> 
                        </View>
                        <Text style={GlobalStyles.nomes}>Séries</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('canais de apoio')}>
                    <View style={localStyles.containerImagem}>
                        <View style={localStyles.botaoImagem}>
                            <Image resizeMode='contain' style={localStyles.imagem} source={require('../../../assets/duvida.png')} /> 
                        </View>
                        <Text style={GlobalStyles.nomes}>Canais de Apoio</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    container:{
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    botoes: {
        width: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 30
    },
    containerImagem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
    },
    botaoImagem: {
        backgroundColor: GlobalColors.CorAcao,
        borderColor: GlobalColors.CorTextoForte,
        borderWidth: 1,
        borderBottomWidth: 5,
        borderRadius: 10,
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        height: 50,
        width: 50
    }
})
