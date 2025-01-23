import React from 'react';
import './ChatText.scss';
import Dialog from './Dialog/Dialog';

const ChatText: React.FC = () => {
    // const [text, setText] = useState('A: Welcome');
    return (
        <div className='ChatText'>
            <div className='ChatText__container-bg'>
                
            </div>
            <div className='ChatText__container'>
                <div className='ChatText__dialog'>
                    <Dialog text={'Meow'} />
                    <Dialog text={'Y: _'} />
                </div>
                <div className='ChatText__enter'>
                    <input type="text" className='ChatText__input' />
                    <button type='button' className='ChatText__btn' onClick={() => {
                        console.log('Click')
                    }}>SEND</button>
                </div>
            </div>
        </div>
    )
};
export default ChatText