import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert, BackHandler } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'
import { useNavigation } from '@react-navigation/native'



export default function Pergunta11(){
    
    const navigation = useNavigation();

    var respostas = {
        p1:  0, p6:  0, p8:  0, p11: 0, p12: 0, p14: 0, p18: 0, // Estresse
        p2:  0, p4:  0, p7:  0, p9:  0, p15: 0, p19: 0, p20: 0, // Ansiedade
        p3:  0, p5:  0, p10: 0, p13: 0, p16: 0, p17: 0, p21: 0  // Depressão
    }

    const [umAtivado, setUmAtivado] = useState(false)
    const [doisAtivado, setDoisAtivado] = useState(false)
    const [tresAtivado, setTresAtivado] = useState(false)
    const [quatroAtivado, setQuatroAtivado] = useState(false)

    const handleUm = () => {
        setDoisAtivado(false)
        setTresAtivado(false)
        setQuatroAtivado(false)
        setUmAtivado(current => !current)
    }

    const handleDois = () => {
        setUmAtivado(false)
        setTresAtivado(false)
        setQuatroAtivado(false)
        setDoisAtivado(current => !current)
    }

    const handleTres = () => {
        setUmAtivado(false)
        setDoisAtivado(false)
        setQuatroAtivado(false)
        setTresAtivado(current => !current)
    }


    const handleQuatro = () => {
        setTresAtivado(false)
        setUmAtivado(false)
        setDoisAtivado(false)
        setQuatroAtivado(current => !current)
    }

    return(
        <View style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.container2}>
                    <Text style={GlobalStyles.pergunta}>1. Achei difícil me acalmar</Text>
                </View>
            
                <View style={localStyles.container2}>
                    
                    <BotaoEscolhaTeste 
                        color = {umAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                        number = {0}
                        title = 'Não se aplicou de maneira alguma'
                        onPress = {handleUm}
                    />
                    <BotaoEscolhaTeste
                        color = {doisAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                        number = {1}
                        title = 'Aplicou-se em algum grau ou por pouco tempo'
                        onPress = {handleDois}
                    />
                    <BotaoEscolhaTeste
                        color = {tresAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                        number = {2}
                        title = 'Aplicou-se em um grau considerável ou por uma boa parte do tempo'
                        onPress = {handleTres}
                    />
                    <BotaoEscolhaTeste
                        color = {quatroAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                        number = {3}
                        title = 'Aplicou-se muito ou na maioria do tempo'
                        onPress = {handleQuatro}
                    />
                </View>
                {/* navigation.navigate('Teste1P2') */}
            </ScrollView>
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Teste1Int2')} />
                    <BotaoPeqProx title='Próximo' onPress={() => {
                        if (doisAtivado) {
                            respostas.p1 = 1
                        } else if (tresAtivado) {
                            respostas.p1 = 2
                        } else if (quatroAtivado) {
                            respostas.p1 = 3
                        }
                        if(umAtivado == false && doisAtivado == false && tresAtivado == false && quatroAtivado == false){
                                Alert.alert('Avaliando a ansiedade, depressão e estresse', 'Selecione uma resposta',
                                [
                                    {text: 'OK', onPress:() => BackHandler.removeEventListener('hardwareBackPress')},
                                ], 
                                {cancelable: false}
                                )
                        }
                        else{
                            navigation.navigate('Teste1P2', {respostas: respostas})
                        }
                        }} /> 
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
        paddingTop: 40
    },
    container2:{
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50
    }
    }
)