import React from 'react';
import  renderer  from 'react-test-renderer';
import Count from './Count';

test('count snapashot with different count ',()=>{
    const component =renderer.create(<Count />)
    //initial rendering 

    let tree =component.toJSON();
    //
    expect(tree).toMatchSnapshot();

    tree.children[2].props.onClick();

    tree=component.toJSON();
    expect(tree).toMatchSnapshot();

    // tree.children[3].props.onClick();
    // tree=component.toJSON();
    // expect(tree).toMatchSnapshot();





  
})