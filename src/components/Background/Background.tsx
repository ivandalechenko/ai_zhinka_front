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
        <div className='Background' style={{
            transform: `translate(${offset.x}px, 0px)`,
            transition: "transform 0.1s ease-out",
        }}>

        </div>
    )};
export default Background