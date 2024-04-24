import React from 'react';
import renderer from 'react-test-renderer'



import { Twoprops } from './Twoprops';

test('Message snapshot with differet',()=>{
    const component = renderer.create(<Twoprops message1="click " message2="ayushddf"/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
})