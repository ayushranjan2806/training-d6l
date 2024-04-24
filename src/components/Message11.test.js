import React from 'react';
import renderer from 'react-test-renderer'


import Message11 from './Message11';

test('Message snapshot with differet',()=>{
    const component = renderer.create(<Message11 message="click the ayish"/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
})