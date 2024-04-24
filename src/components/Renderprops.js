import React ,{useState} from "react";

const Toggle =({render})=>{
    const[isToggled, setIstoggled] =useState(false);

    const toggle=()=>{
        setIstoggled(pretoggle=>!pretoggle);

    }
   return  render(isToggled,toggle);
}

const Renderprops=()=>{
    return(
        <div>
            <Toggle render={(isToggled,toggle)=>(
                <div>
                    <button onClick={toggle}>
                        {isToggled ? "ON" : "OFF"}
                    </button>
                    <p>
                    {isToggled ?'the button is of on ': 'the button is off'}
                    </p>
                    
                  </div>  
                )}
                />
                
        </div>
    )
}

export default Renderprops;