import React from "react";
import Button1 from "./Button1";
import renderer from "react-test-renderer";

test('Button snapshot',()=>{
    const component = renderer.create(<Button1 label="click me the ayuish rabahfhejsdfbhejsdcjfidj"/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
})