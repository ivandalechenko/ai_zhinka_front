import React, { useState } from 'react';
import './ChatText.scss';
import Dialog from './Dialog/Dialog';

const ChatText: React.FC = () => {
    const [text, setText] = useState('A: Welcome');
    return (
        <div className='ChatText'>
            <div className='ChatText__container'>
                <div className='ChatText__dialog'>
                    <Dialog text = {text}/>
                    <Dialog text = {'Y: _'} />
                </div>
                <div className='ChatText__enter'>
                    <input type="text" className='ChatText__input'/>
                    <input type='text' className='ChatText__btn' />
                </div>
            </div>
        </div>
    )};
export default ChatText