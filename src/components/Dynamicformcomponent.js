import React, { useState } from 'react'

const Dynamicformcomponent = () => {
    const[formData,setFormData] =useState({
        username:'',
        email:'',
        password:''
    });

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value //name is the dynamic property 
        });
    };

    const handleSubmit=(e)=>{
        console.log(formData);
        e.preventDefault();
        
    }

  return (
    <form  onSubmit={handleSubmit } >
    

        <input type='text' name='username' value={formData.username} onChange={handleInputChange}/>
        <input type='email' name='email' value={formData.email} onChange={handleInputChange}/>
        <input type='password' name='password' value={formData.password} onChange={handleInputChange}/>
        <button type='submit' onClick={console.log(formData)}>submit</button>

    </form>
  )
}

export default Dynamicformcomponent