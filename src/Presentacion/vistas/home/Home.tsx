import React, { useEffect, useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RounderButton } from '../../componentes/RounderButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './VIewModel';
import { PersonalizadoTextImput } from '../../componentes/PersonalizadoTextImput';
import styles from './Styles';

export const HomeScreen = () => {
    const { email, password, onChange,login,errorMensaje } = useViewModel()
    useEffect(() => {
     if(errorMensaje!== ''){
        ToastAndroid.show(errorMensaje,ToastAndroid.LONG);
     }
    }, [errorMensaje])
    

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
                <PersonalizadoTextImput
                    image={require('../../../../assets/email.png')} placeholder='correo electronico'
                    keyboardType='email-address' propiedad='email' onChangeText={onChange}
                    value={email}
                ></PersonalizadoTextImput>
                <PersonalizadoTextImput
                    image={require('../../../../assets/password.png')} placeholder='password'
                    keyboardType='default' propiedad='password' onChangeText={onChange}
                    value={password} secureTextEntry={true}
                ></PersonalizadoTextImput>


                <View style={{ marginTop: 30 }}>
                    <RounderButton text='ENTRAR' onPress={() => {
                        
                        login();

                    }} />
                </View>

                <View style={styles.formRegistro}>
                    <Text>no tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                        <Text style={styles.formRegistroText} >Registrate</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

