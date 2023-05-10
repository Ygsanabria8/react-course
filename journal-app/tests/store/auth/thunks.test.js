import { signInWithGoogle, loginWithCredentials, logoutFirebase } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAunthentication, startGoogleSignIn, loginUserWithCredentials, startLogout } from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal';
import { demoUser } from '../../fixtures/authFixture';

jest.mock('../../../src/firebase/providers');

describe('Tests on Auth Thunks', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should invoke checkingCredentials', async () => {

        // Arrange
        await checkingAunthentication()(dispatch);
        
        // Assert
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test('should call checkingCredentials and login in startCreatingUserCredentials', async() => {

        // Arrange
        const loginData = {
            ok: true,
            ...demoUser
        };
        await signInWithGoogle.mockResolvedValue(loginData);

        // Act
        await startGoogleSignIn()(dispatch);

        // Asser
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('should call checkingCredentials and logout in startCreatingUserCredentials with error', async() => {

        // Arrange
        const loginData = {
            ok: false,
            errorMessage: 'Este es un error'
        };
        await signInWithGoogle.mockResolvedValue(loginData);

        // Act
        await startGoogleSignIn()(dispatch);

        // Asser
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout('Este es un error'));

    });

    test('should call checkingCredentials and logout in loginUserWithCredentials', async() => {

        // Arrange
        const loginData = {
            ok: true,
            ...demoUser
        };
        const loginForm = {
            email: demoUser.email,
            password: '123456'
        };

        await loginWithCredentials.mockResolvedValue(loginData);

        // Act
        await loginUserWithCredentials(loginForm)(dispatch);

        // Asser
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('should call checkingCredentials and logout in loginUserWithCredentials with error', async() => {

        // Arrange
        const loginData = {
            ok: false,
            errorMessage: 'Este es un error'
        };
        const loginForm = {
            email: demoUser.email,
            password: '123456'
        };

        await loginWithCredentials.mockResolvedValue(loginData);

        // Act
        await loginUserWithCredentials(loginForm)(dispatch);

        // Asser
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout('Este es un error'));

    });

    test('should call logout and clearNotesLogout in startLogout', async() => {

        // Act
        await startLogout()(dispatch);

        // Asser
        expect( logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(logout(undefined));
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());

    });

});