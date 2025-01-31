import React from 'react';
import './Social.scss';
const Social: React.FC = () => {
    return (
        <div className='Social'>
            <a href="https://dexscreener.com/solana/8spkcaaq1yy8bhrpvmzdn3fvegmkvfqcv4kegs6pyq4j" target='_blank'><img src="/img/social/dexScreener.svg" alt="" className='Social__img' /></a>
            <a href="https://x.com/AMYXBTXYZ" target='_blank'><img src="/img/social/twitter.svg" alt="" className='Social__img' /></a>
            <a href="https://t.me/amyxbt" target='_blank'><img src="/img/social/tg.svg" alt="" className='Social__img' /></a>
        </div>
    )
};
export default Social