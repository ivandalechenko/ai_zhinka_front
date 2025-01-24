import React, { useEffect, useRef, useState } from 'react';
import './ChatText.scss';
import Dialog from './Dialog/Dialog';
import axios from 'axios';


const API_BASE_URL = import.meta.env.VITE_API_URL

interface Msg {
    toMe: boolean;
    text: string;
}


const ChatText: React.FC = () => {
    const [loading, setloading] = useState(false);
    const [messages, setmessages] = useState<Msg[]>([]);
    const [input, setinput] = useState('');
    const chatRef = useRef<HTMLDivElement | null>(null)


    const handleMessageSend = async () => {
        setloading(true)
        const message = input;
        let newMessages = [...messages, { toMe: false, text: message }]
        setmessages(newMessages)
        setinput('')
        try {
            const response = await axios.post(`${API_BASE_URL}/chat`, { chat: newMessages });
            const answerText = response.data.message; // Убедитесь, что `message` — строка
            const newMessagesWithAnswer = [...newMessages, { toMe: true, text: answerText }];
            setmessages(newMessagesWithAnswer)
        } catch (error) {
            const newMessagesWithAnswer = [...newMessages, { toMe: true, text: "Something went wrong..." }];
            setmessages(newMessagesWithAnswer)
        } finally {
            setloading(false)
        }
    }


    const scrollToBottom = () => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);




    return (
        <div className='ChatText'>
            <div className='ChatText__container-bg'>
            </div>
            <div className='ChatText__container'>
                <div className='ChatText__dialog' ref={chatRef}>
                    <Dialog text={'Hello mortal, what do you want to know today?'} toMe={true} />

                    {messages.map((msg, index) => {
                        return <Dialog key={`message-${index}`} text={msg.text} toMe={msg.toMe} />
                    })}
                    {
                        loading && <Dialog text={'poebat'} toMe={true} loading={true} />
                    }

                </div>
                <form className='ChatText__enter' onSubmit={(e) => {
                    e.preventDefault()
                    handleMessageSend()
                }}>
                    <input type="text" value={input} onChange={(e) => { setinput(e.target.value) }} className='ChatText__input' placeholder='Enter your message here...' />
                    <button type='button' className='ChatText__btn' onClick={handleMessageSend}>SEND</button>
                </form>
            </div>
        </div>
    )
};
export default ChatText