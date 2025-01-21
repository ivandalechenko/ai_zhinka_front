import React from 'react';
import './Dialog.scss';

interface DialogProps{
    text: String;
}

const Dialog: React.FC<DialogProps> = ({ text }) => {
    return (
        <div className='Dialog'>
            {text}
        </div>
    )};
export default Dialog