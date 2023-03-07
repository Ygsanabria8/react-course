import { render, screen } from "@testing-library/react";

import { GifGridItem } from "../../src/components/GifGridItem";

describe('Test for <GifGridItem />', () => {

    const title = 'Valorant';
    const url = 'https://valorant.com/sage.jpg';

    test('should show the image with url and alt', () => {

        // Act
        render( <GifGridItem title={ title } url={ url } /> );
        const { src, alt } = screen.getByRole('img');

        // Assert
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should show the title on screen', () => {

        // Act
        render( <GifGridItem title={ title } url={ url } /> );

        // Assert
        expect(screen.getByAltText(title)).toBeTruthy();
    });
});