import React from 'react';
import './Social.scss';
const Social: React.FC = () => {
    return (
        <div className='Social'>
            <img src="../../../public/img/social/dexScreener.svg" alt="" className='Social__img' onClick={()=>{
                console.log("DexScrenner")
            }}/>
            <img src="../../../public/img/social/twitter.svg" alt="" className='Social__img' onClick={()=>{
                console.log("Twitter")
            }}/>
            <img src="../../../public/img/social/tg.svg" alt="" className='Social__img'
            onClick={()=>{
                console.log("Tg")
            }}/>
        </div>
    )};
export default Social