import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    test('renders the header component', () => {
        render(<App />);
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toBeInTheDocument();
    });

    test('renders the search component', () => {
        render(<App />);
        const searchElement = screen.getByTestId('search');
        expect(searchElement).toBeInTheDocument();
    });

    test('fetches weather data and renders information component', async () => {
        render(<App />);
        const informationElement = await screen.findByTestId('information');
        expect(informationElement).toBeInTheDocument();
    });

    test('changes the search query when search input changes', async () => {
        render(<App />);
        const searchInput = screen.getByTestId('search-input');
        fireEvent.change(searchInput, { target: { value: 'London' } });
        fireEvent.keyPress(searchInput, { key: 'Enter', code: 13 });
        const informationElement = await screen.findByTestId('information');
        expect(informationElement).toBeInTheDocument();
    });

    test('changes the unit of measurement when unit button is clicked', async () => {
        render(<App />);
        const unitButton = await screen.findByTestId('unit-button');
        fireEvent.click(unitButton);
        const informationElement = await screen.findByTestId('information');
        expect(informationElement).toBeInTheDocument();
    });
});