import React, { useState, useEffect } from 'react';
import './Background.scss';
const Background: React.FC = () => {

    const [offset, setOffset] = useState({ x: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX } = e;
            const centerX = window.innerWidth / 2;
            const offsetX = (clientX - centerX) * -0.02;
            setOffset({ x: offsetX });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='Background free_img'>
            <img src="/img/bg.webp" style={{
                transform: `translate(${offset.x}px, 0px)`,
                transition: `transform 100ms`
                // transform: `scale(${offset})`
            }} alt="" />
        </div>
    )
};
export default Background