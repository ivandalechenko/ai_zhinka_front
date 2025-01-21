import React from 'react';
import './Social.scss';
const Social: React.FC = () => {
    return (
        <div className='Social'>
            <a href="#" target='_blank'><img src="/img/social/dexScreener.svg" alt="" className='Social__img' /></a>
            <a href="#" target='_blank'><img src="/img/social/twitter.svg" alt="" className='Social__img' /></a>
            <a href="#" target='_blank'><img src="/img/social/tg.svg" alt="" className='Social__img' /></a>
        </div>
    )
};
export default Social