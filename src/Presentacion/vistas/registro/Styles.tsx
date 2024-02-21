import { StyleSheet } from "react-native";

const Registrostyles = StyleSheet.create({
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
export default Registrostyles;