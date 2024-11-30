import React, { useEffect } from 'react'
import { Image, View, Text, ScrollView, ToastAndroid } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Styles';
import CustomeTextInput from '../../components/CustomeTextInput';

const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword, errorMessage, onChange, register  } = useViewModel();

    //useEffect para leer el errorMessage y mandar error
    useEffect(() => {
        if(errorMessage != '')
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }, [errorMessage])

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/Home.png')}
                style={styles.ImageBackgroundColor}
            />

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/icons8-nombre-50.png')}
                    style={styles.logoImage}
                />

                <Text style={styles.logoText}>Selecciona una imagen</Text>
            </View>


            <View style={styles.form}>

                <ScrollView>

                <Text style={styles.formText}>Registrarse</Text>

                <CustomeTextInput
                    placeholder='Nombres'
                    keyboardType='default'
                    image={require('../../../../assets/icons8-usuario-masculino-en-círculo-50 (1).png')}
                    property='name'
                    onChangeText={onChange}
                    value={name}
                />

                <CustomeTextInput
                    placeholder='Apellidos'
                    keyboardType='default'
                    image={require('../../../../assets/icons8-usuario-masculino-en-círculo-50.png')}
                    property='lastname'
                    onChangeText={onChange}
                    value={lastname}
                />

                <CustomeTextInput
                    placeholder='Correo electronico'
                    keyboardType='email-address'
                    image={require('../../../../assets/icons8-nuevo-post-30.png')}
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

                <CustomeTextInput
                    placeholder='Telefono'
                    keyboardType='numeric'
                    image={require('../../../../assets/icons8-llamada-50.png')}
                    property='phone'
                    onChangeText={onChange}
                    value={phone}
                />

                <CustomeTextInput
                    placeholder='Contraseña'
                    keyboardType='default'
                    image={require('../../../../assets/icons8-bloquear-50 (1).png')}
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <CustomeTextInput
                    placeholder='Confirmar Contraseña'
                    keyboardType='default'
                    image={require('../../../../assets/icons8-bloquear-50.png')}
                    property='confirmPassword'
                    onChangeText={onChange}
                    value={confirmPassword}
                    secureTextEntry={true}
                />

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR' onPress={() => register()} />
                </View>
                </ScrollView>
            </View>

        </View>
    );
}


export default RegisterScreen
