import { render } from "@testing-library/react";
import App from "../App";

test('Find element by text', () => { 
    const wrapper = render(<App />)
    const linkElement = wrapper.getByText('Counter App');
    expect(linkElement).toBeInTheDocument();
});