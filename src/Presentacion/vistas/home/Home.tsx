import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RounderButton } from '../RounderButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './VIewModel';


export const HomeScreen = () => {
    const {email,password,onChange}= useViewModel()
    

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <View style={styles.container}>
            <Image style={styles.imageBackground}
                source={require('../../../../assets/chef.jpg')} />
            <View style={styles.logoContainer} >
                <Image style={styles.logoImage} source={require('../../../../assets/logo.png')}></Image>
                <Text style={styles.logoText}>FOOD ADD</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.ingresar}>INGRESAR</Text>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/email.png')}
                    ></Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder='correo electronico'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={text=>onChange('email',text)}

                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/password.png')}
                    ></Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder='contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text=>onChange('password',text)}

                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <RounderButton text='ENTRAR' onPress={() => {
                        console.log(email);
                        console.log(password);
                        
                        
                    }} />
                </View>

                <View style={styles.formRegistro}>
                    <Text>no tienes cuenta?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Registro')}>
                    <Text style={styles.formRegistroText} >Registrate</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',


    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',

    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    ingresar: {


        fontWeight: 'bold',
        fontSize: 16
    },
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
    formRegistro: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,

    },
    formRegistroText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBlockColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10,

    },

});