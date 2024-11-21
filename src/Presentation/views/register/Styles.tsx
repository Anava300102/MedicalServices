import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', 
    
    },
    ImageBackgroundColor: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '73%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 15
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    formIcon:{
        width: 30,
        height: 30,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 20,
    
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 10
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: '#07DBEB',
        borderBottomWidth: 1,
        borderBottomColor: '#07DBEB',
        fontWeight: 'bold',
        marginLeft: 10
    },
    logoContainer : {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center'
    
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold'
    },
});

export default RegisterStyles;