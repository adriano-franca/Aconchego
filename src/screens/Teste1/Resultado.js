import React from 'react'
import { Image, Text, StyleSheet, View, Dimensions  } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Resultado21(props){

    var respostas = props.route.params.respostas

    var respostasEstresse = (respostas.p1 + respostas.p6 + respostas.p8 + respostas.p11 + respostas.p12 + respostas.p14 + respostas.p18)*2
    var respostasAnsiedade= (respostas.p2 + respostas.p4 + respostas.p7 + respostas.p9 + respostas.p15 + respostas.p19 + respostas.p20)*2
    var respostasDepressao = (respostas.p3 + respostas.p5 + respostas.p10 + respostas.p13 + respostas.p16 + respostas.p17 + respostas.p21)*2
    
    var estresseTitulo
    var estresseTexto
    var estresseIMG

    var ansiedadeTitulo
    var ansiedadeTexto
    var ansiedadeIMG

    var depressaoTitulo
    var depressaoTexto
    var depressaoIMG

    const getCurrentDate=()=>{
        let totalDate
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
  
        totalDate =(month > 10) ? (year + '-' + month + '-' + date) : (year + '-0' + month + '-' + date);
        return totalDate;
    }

    async function handleNew (chave, resultado) {
        let date = getCurrentDate()
        // Pega o valor que já tava lá
        const json = await AsyncStorage.getItem('@savesavaliacao:' + chave)
        var response = {}
        if (json != null) {
            response = JSON.parse(json)
        }

        // Pegar a data
        const data = date.split("-")
        if (data[2].length < 2) {
            data[2] = "0" + data[2]
        }

        // Botar o novo dia no json
        response[data] = {resultado}
        
        await AsyncStorage.setItem('@savesavaliacao:' + chave, JSON.stringify(response))
    }

    handleNew('ansiedade', respostasAnsiedade);
    handleNew('estresse', respostasEstresse);
    handleNew('depressao', respostasDepressao);

    // Estresse
    if (respostasEstresse < 15) {
        // Estresse = normal
        estresseTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Estresse - Normal</Text>
        estresseTexto = <Text style={GlobalStyles.titulo2}>Seu nível de estresse está baixo. Face aos fatores do cotidiano, você se adapta bem</Text>
        estresseIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Normal.png')} />
    } else if (respostasEstresse < 19){
        // Estresse = leve
        estresseTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Estresse - Leve</Text>
        estresseTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de estresse está ligeramente elevada. Entretanto, você não se encontra em níveis que coloam em risco sua saúde.</Text>
        estresseIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Leve.png')} />
    } else if (respostasEstresse < 26) {
        // Estresse = moderado
        estresseTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Estresse - Moderado</Text>
        estresseTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de estresse está elevada. É importante falar com o seu médico a fim de traçar uma conduta.</Text>
        estresseIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Moderado.png')} />
    } else if (respostasEstresse < 34) {
        // Estresse = severo
        estresseTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Estresse - Grave</Text>
        estresseTexto = <Text style={GlobalStyles.titulo2}>Os resultados demonstram um nível elevado de estresse. Você deve estar se sentindo exaurido pelos fatores estressantes do cotidiano. A tensão emocional produzida pelo acúmulo de fatores estressantes, o colocam sob risco de apresentar sintomas em um ou vários campos: relacional, intelectual, físico ou psíquico.</Text>
        estresseIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Grave.png')} />
    } else {
        // Estresse = extremamente severo
        estresseTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Estresse - Severo</Text>
        estresseTexto = <Text style={GlobalStyles.titulo2}>Os resultados demonstram um nível de estresse muito elevado. As solicitações que você enfrenta no cotidiano ultrapassam a sua capacidade de adaptação que coloca sob risco a sua saúde. Recue, procure desligar-se por um período, delegue, viaje, tire férias e priorize a sua agenda.</Text>
        estresseIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/EstresseSevero.png')} />
    }

    // Ansiedade
    if (respostasAnsiedade < 8) {
        // Ansiedade = normal
        ansiedadeTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Ansiedade - Normal</Text>
        ansiedadeTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação sobre a dimensão de ansiedade demonstra que você não está ansioso(a).</Text>
        ansiedadeIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Normal.png')} />
    } else if (respostasAnsiedade < 10){
        // Ansiedade = leve
        ansiedadeTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Ansiedade - Leve</Text>
        ansiedadeTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de ansiedade está ligeramente elevada. Entretanto, você não se encontra em níveis que coloam em risco sua saúde.</Text>
        ansiedadeIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Leve.png')} />
    } else if (respostasAnsiedade < 15) {
        // Ansiedade = moderado
        ansiedadeTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Ansiedade - Moderada</Text>
        ansiedadeTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de ansiedade está elevada. É importante falar com o seu médico a fim de traçar uma conduta.</Text>
        ansiedadeIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Moderado.png')} />
    } else if (respostasAnsiedade < 20) {
        // Ansiedade = severo
        ansiedadeTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Ansiedade - Grave</Text>
        ansiedadeTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de ansiedade está elevada. É importante falar com o seu médico a fim de traçar uma conduta.</Text>
        ansiedadeIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Grave.png')} />
    } else {
        // Ansiedade = extremamente severo
        ansiedadeTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Ansiedade - Severa</Text>
        ansiedadeTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de ansiedade está elevada. É importante falar com o seu médico a fim de traçar uma conduta.</Text>
        ansiedadeIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/AnsiedadeSevera.png')} />
    }

        // Depresso
        if (respostasDepressao < 10) {
            // Depressão = normal
            depressaoTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Depressão - Normal</Text>
            depressaoTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação sobre a dimensão de depressão demonstra que você não está deprimido(a).</Text>
            depressaoIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Normal.png')} />
        } else if (respostasDepressao < 14){
            // Depressão = leve
            depressaoTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Depressão - Leve</Text>
            depressaoTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de depressão está ligeramente elevada. Entretanto, você não se encontra em níveis que coloam em risco sua saúde.</Text>
            depressaoIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Leve.png')} />
        } else if (respostasDepressao < 21) {
            // Depressão = moderado
            depressaoTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Depressão - Moderada</Text>
            depressaoTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de depressao está elevada. É importante falar com o seu médico a fim de traçar uma conduta.</Text>
            depressaoIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Moderado.png')} />
        } else if (respostasDepressao < 28) {
            // Depressão = severo
            depressaoTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Depressão - Grave</Text>
            depressaoTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de depressão está elevada. É importante falar com o seu médico a fim de traçar uma conduta.</Text>
            depressaoIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/Grave.png')} />
        } else {
            // Depressão = extremamente severo
            depressaoTitulo = <Text style={GlobalStyles.titulo1}>Dimensão Depressão - Severa</Text>
            depressaoTexto = <Text style={GlobalStyles.titulo2}>Sua pontuação na escala de depressão está elevada. É importante falar com o seu médico a fim de traçar uma conduta.</Text>
            depressaoIMG = <Image style={localStyles.logo} source={require('../../../assets/teste1/DepressaoSevero.png')} />
        }


    const navigation = useNavigation();
    
    return(
        <ScrollView>
        <View style={localStyles.container}>
            
            <View style={localStyles.container2}>

            <Text style={GlobalStyles.resposta}>Resultado</Text>
            </View>
            <View style={localStyles.container3}>
                {ansiedadeTitulo}
                {ansiedadeTexto}
                {ansiedadeIMG}
            </View>

            <View style={localStyles.container3}>
                {estresseTitulo}
                {estresseTexto}
                {estresseIMG}
            </View>

            <View style={localStyles.container3}>
                {depressaoTitulo}
                {depressaoTexto}
                {depressaoIMG}
            </View>

            <View style={localStyles.container2}>
            <Botao title='Preciso de Apoio' onPress={() => navigation.navigate('canais de apoio')}/>
            <Botao title='Voltar à tela de Avaliação' onPress={() => navigation.navigate('Aconchego')}/>
            </View>

        </View>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    container:{
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
        paddingTop: 40
    },
    container2:{
        alignItems: 'center'
    },
    container3:{
        alignItems: 'center',
        marginTop: 20
    },
    logo: {
        marginBottom: 30,
        marginTop: 35,
        padding: 10,
        width: 200,
        height: 200
    },

})