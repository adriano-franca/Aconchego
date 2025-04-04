import React from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function Resultado34({route}){

    let resultado = route.params?.resposta

    const navigation = useNavigation();
    
    return(
    <View style={localStyles.container}>
        <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={GlobalStyles.descricao}>Sim. Segundo Frágua Junior, a prática de atividade física libera o fator neurotrófico derivado do cérebro , uma reação que contribui para a formação de mais pontos de contato entre os neurônios e os circuitos que processam as emoções negativas e positivas voltam a se comunicar. “Consequentemente, aumenta o prazer e o interesse por aquilo de que a pessoa gosta, enquanto diminui a tendência de se sentir triste e desanimado. Cabe lembrar que, para quem não consegue fazer atividade física cinco vezes por semana, fazer três vezes por semana já é muito melhor do que não se exercitar. O importante é começar.”{'\n'}{'\n'}{'\n'}</Text>
            </View>
        </ScrollView>
        <View>
            <Botao title='Próximo' onPress={() => navigation.navigate('Teste3P5', {resposta: resultado})}  />
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