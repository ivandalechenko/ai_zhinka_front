import React, { useState, useEffect } from 'react';
import './Decor.scss';
const Decor: React.FC = () => {

    const [offset, setOffset] = useState({ x: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX } = e;
            const centerX = window.innerWidth / 2;
            const offsetX = (clientX - centerX) * 0.02;
            setOffset({ x: offsetX });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <div className='Decor free_img'
            style={{
                transform: `translate(${offset.x}px, 0px)`,
                transition: "transform 0.1s ease-out",
            }}>
            <img src="/img/decor/zhinka.png" alt="" />
        </div>
    )
};
export default Decor