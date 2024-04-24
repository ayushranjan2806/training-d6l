import React from "react";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe('App routing', () => {
    it('renders the Home Component when the home route is accessed', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Home/>
            </MemoryRouter>
        );
        expect(screen.getByText('Welcome to home page')).toBeInTheDocument();
    });
});