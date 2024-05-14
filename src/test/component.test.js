import React from 'react';
import Link from '../Link'; 
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe } from 'jest-circus';
import '@testing-library/jest-dom';

// utiliser le composant Link comme celui- dans vos tests : <Link page="http://www.facebook.com">Facebook</Link>
describe('Link', () => { 
    it('component is not crashing', () => {
      //utiliser simplement la fonction render pour constater que le composant ne créé pas d'erreur lorsqu'il est instancié

    });

    it('should render correctly', () => {
        // vérifie que le composant Link est bien rendu avec le texte Facebook
    });

    
    it('renders correctly', () => {
        // vérifie que le composant Link a la classe normal lorsqu'il est rendu
    });
    
    it('can see title', () => {
        // vérifie que le texte Facebook est bien rendu 
    });
    
    it('validate props', () => {
        // vérifie que le lien href est bien http://www.facebook.com 

    });
    
    
    it('test status classname change on hover', () => {
        // vérifie que la classe hovered est bien ajoutée lors du hover sur le composant et retirée lors du unhover


      });
});