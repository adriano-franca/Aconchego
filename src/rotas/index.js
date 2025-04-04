import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "../screens/home";
import TelaApoio from "../screens/Apoio/TelaApoio";
import Avaliacao from "../screens/avaliacao";

import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import GlobalColors from "../componentes/Global/GlobalColors";
import GlobalStyles from "../componentes/Global/GlobalStyles";

const Tab = createBottomTabNavigator();

export default function RotasBottom() {

    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarStyle: {
                        backgroundColor: GlobalColors.CorFundo,
                        borderTopWidth: 2,
                        borderTopColor: GlobalColors.CorTextoFraco,
                        height: 65,
                        paddingBottom: 5,
                        paddingTop: 5
                    },
                    tabBarActiveTintColor: GlobalColors.CorAcao,
                    tabBarInactiveTintColor: GlobalColors.CorTextoForte
                }
            }
        >
            <Tab.Screen
                name = 'Home'
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name='home' size={25} color={color}/>
                    ),
                    tabBarLabelStyle: GlobalStyles.textoTabBottom,
                    headerShown: false
                }}
            />

            <Tab.Screen
                name = 'Apoio'
                component={TelaApoio}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name='people' size={25} color={color}/>
                    ),
                    tabBarLabelStyle: GlobalStyles.textoTabBottom,
                    headerTitleStyle: GlobalStyles.header,
                    headerStyle: {
                        height: 70,
                        backgroundColor: GlobalColors.CorFundo,
                        borderBottomWidth: 2,
                        borderBottomColor: GlobalColors.CorTextoFraco,
                    },
                    headerTitleAlign: 'center'
                }}
            />

            <Tab.Screen
                name = 'Avaliação'
                component={Avaliacao}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name='account-search' size={25} color={color}/>
                    ),
                    tabBarLabelStyle: GlobalStyles.textoTabBottom,
                    headerTitleStyle: GlobalStyles.header,
                    headerStyle: {
                        height: 70,
                        backgroundColor: GlobalColors.CorFundo,
                        borderBottomWidth: 2,
                        borderBottomColor: GlobalColors.CorTextoFraco,
                    },
                    headerTitleAlign: 'center'
                }}
            />

        </Tab.Navigator>
    )

}