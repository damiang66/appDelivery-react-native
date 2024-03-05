import React from 'react'
import { Button, Text, View } from 'react-native'
import useViewModel from './ViewModel'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../../App'
interface Props extends NativeStackScreenProps<RootStackParamList,"ProfileInfo">{};
export const ProfileInfoScreen = ({navigation,route}:Props) => {
  const {removeSession}= useViewModel()
  return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Button
    title='Cerrar sesion'
    onPress={()=>{
      removeSession();
      navigation.navigate('HomeScreen');
    }
  }
     />
   </View>
  )
}
