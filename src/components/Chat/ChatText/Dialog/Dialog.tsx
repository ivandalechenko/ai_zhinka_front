import React, { useEffect, useState } from 'react';
import './Dialog.scss';

interface DialogProps {
    text: String;
    toMe: Boolean;
    loading?: Boolean;
}

const LOADING_LETTERS = ['|', '/', '-', '\\',]

const Dialog: React.FC<DialogProps> = ({ text, toMe, loading = false }) => {
    const [loadingCounter, setloadingCounter] = useState(0);

    let loadingInterval: number;
    useEffect(() => {
        loadingInterval = setInterval(() => {
            setloadingCounter(prev => prev + 1)
        }, 100);
        return () => {
            clearInterval(loadingInterval)
        }
    }, [])

    return (
        <div className='Dialog'>
            {
                loading ? `Loading ${LOADING_LETTERS[loadingCounter % LOADING_LETTERS.length]}` : <>
                    {toMe ? 'A: ' : 'Y: '}
                    {text}
                </>
            }
        </div>
    )
};
export default Dialog