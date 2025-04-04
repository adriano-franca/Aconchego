import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import GlobalColors from '../Global/GlobalColors';

export default function BackButton() {
    const navigation = useNavigation();
    return (
      <Entypo
        name='chevron-left'
        size={40} color={GlobalColors.CorTextoForte}
        style={{marginRight: -15}}
        onPress={() => navigation.navigate('Aconchego')}
        />
    );
  }