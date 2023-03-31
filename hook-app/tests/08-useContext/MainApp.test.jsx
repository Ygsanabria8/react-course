import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/08-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Test on Main App', () => {

    test('should show HomePage', () => {

        // Act
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText('Home Page')).toBeTruthy();

    });

    test('should show LoginPage', () => {

        // Act
        render(
            <MemoryRouter initialEntries={ ['/login'] }>
                <MainApp/>
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText('Login Page')).toBeTruthy();

    });

    test('should show AboutPage', () => {

        // Act
        render(
            <MemoryRouter initialEntries={ ['/about'] }>
                <MainApp/>
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText('About Page')).toBeTruthy();

    });

    test('should show AboutPage', () => {

        // Act
        render(
            <MemoryRouter initialEntries={ ['/asdrr2w'] }>
                <MainApp/>
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText('About Page')).toBeTruthy();

    });
});