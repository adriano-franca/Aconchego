import React from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function Resultado37({route}){

    let resultado = route.params?.resposta

    const navigation = useNavigation();
    
    return(
    <View style={localStyles.container}>
        <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={GlobalStyles.descricao}>Sim. Compartilhar, como a própria palavra sugere, é dividir, é repartir. Ao desabafar e expressar seus sentimentos, é possivel reduzir a angústia , sentir-se amparado, incentivado e acolhido. Isso, por si só, já reduz o sofrimento, mas é importante estar respaldado por apoio profissional para falar sobre suas emoções, mesmo se você não estiver passando por um momento de crise ou suspeita de algum transtorno mental.{'\n'}{'\n'}{'\n'}{'\n'}</Text>
            </View>
        </ScrollView>
        <View>
            <Botao title='Próximo' onPress={() => navigation.navigate('Teste3P8', {resposta: resultado})}  />
        </View>
    </View>
    )
}

const localStyles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
        paddingTop: 50,
        },
    resposta: {
        color: GlobalColors.CorTextoForte,
        fontSize: 25,
        fontFamily: 'IBMPlexSans_Bold',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: 330
        }
    }
)