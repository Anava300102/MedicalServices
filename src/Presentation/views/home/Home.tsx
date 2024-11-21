import React, {useState} from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles';
import CustomeTextInput from '../../components/CustomeTextInput';

const HomeScreen = () => {

    const { email, password, onChange} = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

return (
    <View style={styles.container}>
        <Image
        source={require('../../../../assets/Home.png')} 
        style={styles.ImageBackgroundColor}
        />

        <View style={styles.logoContainer}>
        <Image
            source={require('../../../../assets/logo.png')}
            style={styles.logoImage}
        />

        <Text style={styles.logoText}>MEDICAL SERVICES</Text>

        </View>
        <View style={styles.form}>

        <Text style={styles.formText}>INGRESAR</Text>

        <CustomeTextInput 
            image={require('../../../../assets/icons8-nuevo-post-30.png')}
            placeholder='Contraseña'
            keyboardType='email-address'
            property='email'
            onChangeText={onChange}
            value={email}
        />

        <CustomeTextInput 
            image={require('../../../../assets/Candado.jpeg')}
            placeholder='Correo electronico'
            keyboardType='default'
            property='password'
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
        />


        <View style={{marginTop: 30}}>
            <RoundedButton text='LOGIN' onPress={() => {
                console.log('Email: ' + email);
                console.log('Password: ' + password);
            }}/>
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
    
export default HomeScreen