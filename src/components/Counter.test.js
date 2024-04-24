import React   from "react";
import { render,fireEvent } from "@testing-library/react";

import Counter from "./Counter";

describe('counter component' ,()=>{

    it('rendering with initial count ',()=>{
        const {getByText} = render(<Counter initialCount={0}/>);

        expect( getByText('Count : 0')).toBeInTheDocument()
    })

    it('increments count on clickling increment button ',()=>{
        const {getByText} = render(<Counter initialCount={0}/>);

        fireEvent.click(getByText('Increment'));

        expect( getByText('Count : 1')).toBeInTheDocument()
    })
    it('decrement count on clicking decrement button',()=>{
        const {getByText} = render(<Counter initialCount={0}/>);
        fireEvent.click(getByText('Decrement'));
        expect( getByText('Count : -1')).toBeInTheDocument()
    })

    it('increment and decrement both combine',()=>{
        const {getByText} = render(<Counter initialCount={0}/>);
        fireEvent.click(getByText('Decrement'));
        fireEvent.click(getByText('Increment'));
        expect( getByText('Count : 0')).toBeInTheDocument()
    })
})