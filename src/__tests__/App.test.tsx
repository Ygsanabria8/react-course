import { render, screen } from "@testing-library/react";
import App from "../App";

test('Find element by text', () => { 
    render(<App />)
    const linkElement = screen.getByText('Counter App');
    expect(linkElement).toBeInTheDocument();
});