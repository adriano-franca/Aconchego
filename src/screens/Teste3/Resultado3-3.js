import React from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView,} from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function Resultado33({route}){

    let resultado = route.params?.resposta

    const navigation = useNavigation();
    
    return(
    <View style={localStyles.container}>
        <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={GlobalStyles.descricao}>Não. “Uma dieta rica e variada garante o aporte de elementos essenciais para o bom funcionamento dos neurotransmissores, o que tem um papel importante na prevenção da depressão. Por exemplo, folato, feijões, grãos, frutas cítricas e fígado, entre outros, permite a formação de aminoácido triptofano, cuja deficiência está associada ao aumento no risco de depressão. A vitamina B12, presente no azeite e nos derivados do leite com baixo teor de gordura, também é fundamental para a neurotransmissão, processo cerebral que, entre outras funções atua na modulação de humor. Por outro lado, uma alimentação rica em caloria, mas com baixo teor nutritivo, com frituras e gorduras saturadas, tem sido associada a maior risco de depressão”, alerta o psiquiata.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
            </View>
        </ScrollView>
        <View>
            <Botao title='Próximo' onPress={() => navigation.navigate('Teste3P4', {resposta: resultado})}   />
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
        maxWidth: 330,
        }
    }
)