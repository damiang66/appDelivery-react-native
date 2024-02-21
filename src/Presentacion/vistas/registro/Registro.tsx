import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { RounderButton } from '../../componentes/RounderButton';
import useViewModel from './ViewModel';
import { PersonalizadoTextImput } from '../../componentes/PersonalizadoTextImput';
import styles from './Styles'
export const Registro = () => {
   const {nombre,apellido,email,telefono,password,confirmarPassword,onChange,registro}=useViewModel();
    return (
        <View style={styles.container}>
            <Image style={styles.imageBackground}
                source={require('../../../../assets/chef.jpg')} />
            <View style={styles.logoContainer} >
                <Image style={styles.logoImage} source={require('../../../../assets/user_image.png')}></Image>
                <Text style={styles.logoText}>Ingrese una Imagen</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.ingresar}>Registrate</Text>
                {  /* para el formulario de registro */}
                <PersonalizadoTextImput
                    image={require('../../../../assets/user.png')} placeholder='nombre'
                    keyboardType='default' propiedad='nombre' onChangeText={onChange}
                    value={nombre}
                ></PersonalizadoTextImput>
                 <PersonalizadoTextImput
                    image={require('../../../../assets/my_user.png')} placeholder='apellido'
                    keyboardType='default' propiedad='apellido' onChangeText={onChange}
                    value={apellido}
                ></PersonalizadoTextImput>
               <PersonalizadoTextImput
                    image={require('../../../../assets/email.png')} placeholder='email'
                    keyboardType='email-address' propiedad='email' onChangeText={onChange}
                    value={email}
                ></PersonalizadoTextImput>
                <PersonalizadoTextImput
                    image={require('../../../../assets/phone.png')} placeholder='telefono'
                    keyboardType='numeric' propiedad='telefono' onChangeText={onChange}
                    value={telefono}
                ></PersonalizadoTextImput>
               <PersonalizadoTextImput
                    image={require('../../../../assets/password.png')} placeholder='password'
                    keyboardType='default' propiedad='password' onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                ></PersonalizadoTextImput>
                 <PersonalizadoTextImput
                    image={require('../../../../assets/confirm_password.png')} placeholder='confirmar password'
                    keyboardType='default' propiedad='confirmarPassword' onChangeText={onChange}
                    value={confirmarPassword}
                    secureTextEntry={true}
                ></PersonalizadoTextImput>
               
                <View style={{ marginTop: 30 }}>
                    <RounderButton text='Confirmar' onPress={() => registro()} />
                </View>


            </View>

        </View>
    );
}

