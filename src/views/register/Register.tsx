import React from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
        <Image
          source={require('../../../assets/Home.png')} 
          style={styles.ImageBackgroundColor}
          />

        <View style={styles.logoContainer}>
          <Image
              source={require('../../../assets/icons8-nombre-50.png')}
              style={styles.logoImage}
          />

          <Text style={styles.logoText}>Selecciona una imagen</Text>
        </View>


        <View style={styles.form}>

        <Text style={styles.formText}>Registrarse</Text>

        <View style={styles.formInput}>
            <Image
              style={styles.formIcon}
              source={require('../../../assets/icons8-nombre-50.png')}
              />
        <TextInput
            style={styles.formTextInput}
            placeholder='Nombres'
            keyboardType='default'
            />
        </View>

        <View style={styles.formInput}>
            <Image
              style={styles.formIcon}
              source={require('../../../assets/icons8-usuario-masculino-en-círculo-50 (1).png')}
              />
        <TextInput
            style={styles.formTextInput}
            placeholder='Apellidos'
            keyboardType='default'
            />
        </View>

        <View style={styles.formInput}>
            <Image
              style={styles.formIcon}
              source={require('../../../assets/icons8-llamada-50.png')}
              />
        <TextInput
            style={styles.formTextInput}
            placeholder='Telefono'
            keyboardType='numeric'
            />
        </View>

        <View style={styles.formInput}>
            <Image
              style={styles.formIcon}
              source={require('../../../assets/icons8-nuevo-post-30.png')}
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
            source={require('../../../assets/icons8-bloquear-50 (1).png')}
            />
        <TextInput
            style={styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            />
        </View>

        <View style={styles.formInput}>
            <Image
            style={styles.formIcon}
            source={require('../../../assets/icons8-bloquear-50.png')}
            />
        <TextInput
            style={styles.formTextInput}
            placeholder='Confirmar Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            />
        </View>

        <View style={{marginTop: 30}}>
            <RoundedButton text='CONFIRMAR' onPress={() => ToastAndroid.show('Hola', ToastAndroid.SHORT)}/>
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
        height: '70%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
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

export default RegisterScreen
