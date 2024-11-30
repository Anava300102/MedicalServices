import React, { useState } from 'react'
import { ApiMedical } from '../../../Data/sources/remote/api/ApiMedical';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const register = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values);
            console.log('RESULT: ' + JSON.stringify(response));
        }


    }

    const isValidForm = (): boolean => {
        const validations: { [key: string]: string } = {
            name: 'Ingresa tu nombre',
            lastname: 'Ingresa tu(s) apellido(s)',
            email: 'Ingresa tu correo electrónico',
            phone: 'Ingresa tu teléfono',
            password: 'Ingresa tu contraseña',
            confirmPassword: 'Valida tu contraseña',
        };

        for (const field in validations) {
            if (!values[field as keyof typeof values]) {
                setErrorMessage(validations[field]);
                return false;
            }
        }

        if (values.password !== values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
            return false;
        }

        return true;
    };

    return {
        ...values,
        onChange,
        register,
        errorMessage,
    };
};

export default RegisterViewModel;
