import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'
interface Props {
    image:any,
    placeholder:string,
    value:string,
    keyboardType:KeyboardType,
    secureTextEntry?:boolean,
    propiedad:string,
    onChangeText:(propiedad:string,value:any)=>void

}

export const PersonalizadoTextImput = ({
    image
    ,placeholder,value,keyboardType,secureTextEntry=false,propiedad,onChangeText
}:Props) => {
  return (
    <View style={styles.formInput}>
    <Image
        style={styles.formIcon}
        source={image}
    ></Image>
    <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text=>onChangeText(propiedad,text)}
        secureTextEntry={secureTextEntry}

    />
</View>
  )
}
const styles = StyleSheet.create(
    {
        textInput: {
            marginLeft: 15,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#EBEBEB'
    
        },
        formInput: {
            marginTop: 30,
            flexDirection: 'row'
        },
        formIcon: {
            marginTop: 5,
            width: 25,
            height: 25,
        },
    }
)