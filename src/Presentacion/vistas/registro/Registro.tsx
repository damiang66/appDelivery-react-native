import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { RounderButton } from '../RounderButton';

export const Registro = () => {
    const[usuario,setUsurio]= useState({});
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
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/user.png')}
                    ></Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Nombre'
                        keyboardType='default'

                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/my_user.png')}
                    ></Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Apellido'
                        keyboardType='default'

                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/email.png')}
                    ></Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder='correo electronico'
                        keyboardType='email-address'

                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/phone.png')}
                    ></Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder='telefono'
                        keyboardType='numeric'

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

                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/confirm_password.png')}
                    ></Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Confirmar contraseña'
                        keyboardType='default'
                        secureTextEntry={true}

                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <RounderButton text='Confirmar' onPress={() => ToastAndroid.show('Hola', ToastAndroid.SHORT)} />
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
        top: '5%',
        alignItems: 'center',
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
        height: '70%',
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
