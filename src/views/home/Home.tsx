import React from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

return (
    <View style={styles.container}>
        <Image
        source={require('../../../assets/Home.png')} 
        style={styles.ImageBackgroundColor}
        />

        <View style={styles.logoContainer}>
        <Image
            source={require('../../../assets/logo.png')}
            style={styles.logoImage}
        />

        <Text style={styles.logoText}>MEDICAL SERVICES</Text>
        </View>


        <View style={styles.form}>

        <Text style={styles.formText}>INGRESAR</Text>

        <View style={styles.formInput}>
            <Image
            style={styles.formIcon}
            source={require('../../../assets/Correo.png')}
            />
        <TextInput
            style={styles.formTextInput}
            placeholder='Correo electronico'
            keyboardType='email-address'
            />
        </View>

        <View style={styles.formInput}>
            <Image
            style={styles.formIcon}
            source={require('../../../assets/Candado.jpeg')}
            />
        <TextInput
            style={styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            />
        </View>

        <View style={{marginTop: 30}}>
            <RoundedButton text='LOGIN' onPress={() => ToastAndroid.show('Hola', ToastAndroid.SHORT)}/>
        </View>

        <View style={styles.formRegister}>
            <Text>No tienes cuenta?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.formRegisterText}>Registrate</Text>
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
    

export default HomeScreen
