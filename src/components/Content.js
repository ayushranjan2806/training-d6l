import React from "react";
import { useTheme } from "./Themecontext";

function Content(){
    const {theme} =useTheme();

    return(
        <div className={`content ${theme} `}>
            <p>
                this is some content with current theme :{theme}
            </p>
        </div>
    )

}

export default Content;