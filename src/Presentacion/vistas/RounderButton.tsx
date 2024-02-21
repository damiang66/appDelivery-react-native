import React from 'react'
import { TouchableOpacity, Text,StyleSheet } from 'react-native';
import {COLORS} from '../theme/AppTheme'

interface Props{
    text:string,
    onPress:()=>void
}
export const RounderButton = ({text,onPress}:Props) => {
  return (
   <TouchableOpacity
   style={styles.RounderButton}
   onPress={()=>onPress()}
  
   >
     <Text style={styles.textButton}>{text}</Text>
   </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    RounderButton:{
        width:'100%',
        height:50,
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    },
    textButton:{
        color:'white',
        fontWeight:'bold',
        
       

    }
})