import React from "react";
import {render,fireEvent} from '@testing-library/react' 

import Button from "./Button";

describe("Button component",()=>{
    it('Render the button with correct label',()=>{
        const {getByTestId,} = render(<Button label="Click me please"/>);

        const ButtonElement=getByTestId('button')

        expect(ButtonElement).toBeInTheDocument();

        expect(ButtonElement).toHaveTextContent("Click me please");



    })
    it('calls the onClick function when clicked',()=>{
        const onClickMock = jest.fn();
        const {getByTestId} = render(<Button label="Click me please" onClick={onClickMock}/>);

        const ButtonElement=getByTestId('button')

        fireEvent.click(ButtonElement)

        expect(onClickMock).toHaveBeenCalledTimes(1);
    })

    })