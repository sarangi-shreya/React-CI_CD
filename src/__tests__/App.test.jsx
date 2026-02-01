import { fireEvent, render, screen } from '@testing-library/react' ;
import App from '../App' ;

test('renders Vite + React text',() => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/i);
    expect(linkElement).toBeInTheDocument();
});

test('increments count on button click',() => {
    render(<App />);
    const buttonElement = screen.getByText(/count is 0/);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 2');
});
