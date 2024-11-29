import React, {useState} from 'react'
import {ApiMedical} from '../../../Data/sources/remote/api/ApiMedical';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';




const RegisterViewModel = () => {

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const register = async () => {
        const { result, error } = await RegisterAuthUseCase(values);
        console.log('RESULT: ' + JSON.stringify(result));
        console.log('ERROR: ' + error);
        
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default RegisterViewModel;
