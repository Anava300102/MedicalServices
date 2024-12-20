import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
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
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 10
    },
    formIcon:{
        width: 30,
        height: 30,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
    
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
        top: '15%',
    
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 9,
        marginTop: 10,
        fontWeight: 'bold'
    },
});
    

export default HomeStyles;