import React from 'react'
import { Image, View, StyleSheet, Text, ScrollView } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function SaibaMais() {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={localStyles.container}>
                <Image style={localStyles.logo} source={require('../../assets/logo.png')} />
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.titulo1}>Aconchego é um aplicativo de Apoio em Saúde mental</Text>
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.descricao}>A nossa saúde mental pode ser compreendida pelo bem-estar
                        emocional e social. Possui relação com a maneira como pensamos, sentimos
                        e agimos em nosso dia-a-dia. Também é determinada pela forma como lidamos
                        com o estresse, nos relacionamos com os outros e tomamos decisões.</Text>
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.titulo1}>Sobre Nós</Text>
                    <Text style={GlobalStyles.titulo2}>Realização</Text>
                    <Text style={GlobalStyles.titulo2}>Universidade Estadual do Vale do Aracaú</Text>
                    <Text style={GlobalStyles.titulo2}>(UVA)</Text>
                    <Text style={GlobalStyles.titulo2}>Curso de Enfermagem</Text>
                    <Image style={localStyles.logo} source={require('../../assets/aracau.png')} />
                    <Text style={GlobalStyles.titulo2}>Grupo de Estudo e Pesquisa Saúde Mental e Cuidado</Text>
                    <Image style={localStyles.logo} source={require('../../assets/gesam.png')} />
                    <Text style={GlobalStyles.titulo1}>Apoio Financeiro</Text>
                    <Text style={GlobalStyles.titulo2}>Fundação Cearense de Apoio ao Desenvolvimento Cientifico e Tecnológico
                        FUNCAP</Text>
                    <Image style={localStyles.logo} source={require('../../assets/funcap.png')} />
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.titulo1}>Parceiros</Text>
                    <Text style={GlobalStyles.titulo2}>Universidade Federal do Ceará</Text>
                    <Image style={localStyles.logo_UFC} source={require('../../assets/UFC.png')} />
                    <Text style={GlobalStyles.titulo2}>Loading Desenvolvimento Jr</Text>                 
                    <Image style={localStyles.logo_loading} source={require('../../assets/Loading.png')} />
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.titulo1}>Créditos</Text>
                    <Text style={GlobalStyles.titulo2}>Prof. a Dra Eliany Nazaré Oliveira</Text>
                    <Text style={GlobalStyles.nomes}>Docente do Curso de Enfermagem da Universidade Estadual do Vale do Acaraú</Text>
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.titulo2}>João Breno Cavalcante Costa</Text>
                    <Text style={GlobalStyles.nomes}>Mestrado Acadêmico em Saúde da Família, Universidade Federal do Ceará</Text>
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.titulo2}>Bolsistas do Programa de Bolsa de Produtividade em Pesquisa, Estímulo à Interiorização e à Inovação Tecnológica (BPI-FUNCAP) e Discentes do Curso de Enfermagem da Universidade Estadual Vale do Acaraú (UVA)</Text>
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.nomes}>Caio San Rodrigues</Text>
                    <Text style={GlobalStyles.nomes}>Letícia Mara Cavalcante Lima</Text>
                    <Text style={GlobalStyles.nomes}>Lídia Cristina Monteiro da Silva</Text>
                    <Text style={GlobalStyles.nomes}>Ravena Silva do Nascimento</Text>
                    <Text style={GlobalStyles.nomes}>Flávia Regino Oliveira</Text>
                    <Text style={GlobalStyles.nomes}>Ana Beatryz dos Santos Costa</Text>
                    <Text style={GlobalStyles.nomes}>Emilia do Nascimento Silva</Text>
                    <Text style={GlobalStyles.nomes}>Alexia Gomes Souza</Text>
                    <Text style={GlobalStyles.nomes}>Ravena Petra Mororó Ziesemer</Text>
                    <Text style={GlobalStyles.nomes}>Sabrina da Silva França</Text>
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.titulo2}>Discente do Curso de Engenharia da Computação da Universidade Ferderal do Ceará (UFC)</Text>
                </View>
                <View style={GlobalStyles.paragrafo}>
                    <Text style={GlobalStyles.nomes}>Ana Lara Carvalho Mesquita</Text>
                    <Text style={GlobalStyles.nomes}>Joyce Ávila Ximenes</Text>
                </View>
                <Botao title='Voltar à Tela Principal' onPress={() => navigation.navigate('Aconchego')} />
            </View>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    },
    logo: {
        marginBottom: 30,
        marginTop: 35,
        padding: 10,
        width: 200,
        height: 200
    },
    logo_UFC: {
        marginBottom: 30,
        marginTop: 35,
        padding: 10,
        width: 270,
        height: 190
    },
    logo_loading: {
        marginBottom: 30,
        marginTop: 35,
        padding: 10,
        width: 250.5,
        height: 99
    }
})
