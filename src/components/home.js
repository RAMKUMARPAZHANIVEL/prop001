import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react';
const Color = ({colors,codes}) => {
       const [isCopied, setCopied] =useState(false);
    const changeBg = () => {
        setCopied(true);
        setTimeout(() => {
        setCopied(false);
    },5000)}
   return(
        <div>
           <h1> {isCopied === true? "Copied 👍":false}</h1> 
           <div className='main-container'>
                {colors.map((elem,idx) => {
                    return(
                     <CopyToClipboard text={codes[0]} onCopy={changeBg} key={idx} >
                       <div className='pallete-container' >
                        
                        <div className='pallete' style={ {backgroundColor : elem }}>
                        
                        </div>
                        <p>{elem}</p>
                        <p>{codes[idx]}</p>
                       </div>
                     </CopyToClipboard>
                   ); 
                })}
                
            </div>
        </div>
    );
}

export default Color;