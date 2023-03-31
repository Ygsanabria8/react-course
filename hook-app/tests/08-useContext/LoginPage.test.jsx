import { fireEvent, render, screen } from '@testing-library/react';
import { HomePage, LoginPage } from '../../src/08-useContext/LoginPage';
import { UserContext } from '../../src/08-useContext/context/UserContext';

describe('Test on LoginPage', () => {

    test('should show LoginPage without user', () => {

        // Act
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        // Assert
        expect(preTag.innerHTML).toBe('null');
    });

    test('should call setUser when click on button', () => {

        // Arrange
        const setUserMock = jest.fn();

        // Act
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        // Assert
        expect(setUserMock).toHaveBeenCalledTimes(1);
        expect(setUserMock).toHaveBeenCalledWith({
            id:123, 
            name:'Yesid Sanabria', 
            email:'yesid@email.com'
        });
    });
});