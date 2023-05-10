import { useDispatch, useSelector } from 'react-redux'

import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography, Alert } from "@mui/material";

import { useForm } from "../../hooks";
import { loginUserWithCredentials, startGoogleSignIn } from '../../store/auth';

import { AuthLayout } from "../layout/AuthLayout";
import { useMemo } from 'react';

const formData = {email: '',password: '' }

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const { formState, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUserWithCredentials(formState));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
      <form
        aria-label='submit-form'
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label='Correo' 
                type='email'
                placeholder='correo@google.com'
                fullWidth
                name="email"
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label='Contraseña' 
                type='password'
                placeholder='Contraseña'
                fullWidth
                name="password"
                inputProps={{ 'aria-label': 'password' }}
                onChange={ onInputChange }
              />
            </Grid>

            <Grid 
              container 
              spacing={2} sx={{ mb: 1, mt: 1 }}
              display={ !!errorMessage ? '' : 'none'}
            >
              <Grid 
                item
                xs={ 12 }
              >
                <Alert
                  severity='error'
                >
                  { errorMessage }
                </Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant='contained' 
                  fullWidth
                  type="submit"
                  aria-label='submit-btn'
                  disabled={ isAuthenticating }
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  variant='contained' 
                  fullWidth
                  aria-label='google-btn'
                  onClick={ onGoogleSignIn }
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
};
