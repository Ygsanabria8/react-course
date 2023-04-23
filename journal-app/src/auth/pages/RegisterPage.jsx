import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography, Alert } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { startCreatingUserCredentials } from '../../store/auth/thunks';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { 
    formState, onInputChange, isFormValid, formValidation
  } = useForm( formData, formValidations );

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
    dispatch(startCreatingUserCredentials(formState));
  }

  return (
    <AuthLayout title='Registro'>
      <form 
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label='Nombre' 
                type='text'
                placeholder='Yesid Sanabria'
                fullWidth
                name="displayName"
                value={ formState.displayName }
                onChange={ onInputChange }
                error={ !!formValidation.displayNameValid && formSubmitted }
                helperText={ formValidation.displayNameValid }
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label='Correo' 
                type='email'
                placeholder='correo@google.com'
                fullWidth
                name="email"
                value={ formState.email }
                onChange={ onInputChange }
                error={ !!formValidation.emailValid && formSubmitted }
                helperText={ formValidation.emailValid }
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label='Contraseña' 
                type='password'
                placeholder='Contraseña'
                fullWidth
                name="password"
                value={ formState.password }
                onChange={ onInputChange }
                error={ !!formValidation.passwordValid && formSubmitted  }
                helperText={ formValidation.passwordValid }
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid 
                item
                xs={ 12 }
                display={ !!errorMessage ? '' : 'none'}
              >
                <Alert
                  severity='error'
                >
                  { errorMessage }
                </Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button 
                  variant='contained' 
                  fullWidth
                  type="submit"
                  disabled={ isCheckingAuthentication }
                >
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                ingresa aquí
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  );
};
