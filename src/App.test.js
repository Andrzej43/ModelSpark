// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelSpark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelSpark/i);
    expect(titleElement).toBeInTheDocument();
});
