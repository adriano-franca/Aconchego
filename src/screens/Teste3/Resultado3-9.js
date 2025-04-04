import React from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function Resultado39({route}){

    let resultado = route.params?.resposta

    const navigation = useNavigation();
    
    return(
    <View style={localStyles.container}>
        <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={GlobalStyles.descricao}>Sim. Fráguas explica que a auto observação é o primeiro passo para o cuidar, pois perceber os estados emocionais indicativos de uma disfunção como a depressão permite lidar melhor com as emoções. Por exemplo, a percepção de uma autoexigência excessiva ajuda a desenvolver tolerância e compaixão consigo mesmo e o cuidar de si mesmo com ternura. “Quem está sofrendo depressão precisa entender que seu estado emocional é diferente de uma tristeza normal para, a partir daí, conseguir buscar ajuda. Vale lembrar que a redução de interesse e prazer por aquilo de que gosta também pode ser um sintoma depressivo e é tão importante quanto o humor depressivo em si.”{'\n'}{'\n'}{'\n'}{'\n'}</Text>
            </View>
        </ScrollView>
        <View>
            <Botao title='Próximo' onPress={() => navigation.navigate('Teste3P10', {resposta: resultado})} />
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