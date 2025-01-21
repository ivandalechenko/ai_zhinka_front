import React from 'react';
import './Chat.scss';
import ChatText from './ChatText/ChatText';
import Social from './Social/Social';

const Chat: React.FC = () => {
    return (
        <div className='Chat'>
            <Social />
            <ChatText />
        </div>
    )};
export default Chat