import React from 'react';
import Link from '../Link'; 
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe } from 'jest-circus';
import '@testing-library/jest-dom';

// utiliser le composant Link comme celui-ci dans vos tests : <Link page="http://www.facebook.com">Facebook</Link>
describe('Link component', () => { 
    it('renders with correct text content', () => {
        // vérifie que le composant Link est bien rendu avec le texte "Facebook"
    });

    
    it('has the correct default classname', () => {
        // vérifie que le composant Link a la classe "normal" lorsqu'il est rendu
    });
    
    it('renders correct href attribute', () => {
        // vérifie que le lien href est bien "http://www.facebook.com"

    });
    
    it('changes classname on hover', () => {
        // vérifie que la classe "hovered" est bien ajoutée lors du survol sur le composant et retirée lors du unhover

    });
});
