"use client"
import { useEffect, useState } from 'react';

export const Draggable = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    // Set the default position to the center of the screen
    useEffect(() => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setPosition({ x: centerX, y: centerY });
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });

        document.body.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (dragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };
    const handleMouseUp = () => {
        setDragging(false);
        document.body.style.cursor = 'default';
    };
    
    return (
        <div className="absolute text-white select-none text-center transform -translate-x-1/2 -translate-y-1/2 cursor-move"
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <h1>Jayson Rosales Custodio</h1>
            <div className='flex flex-row gap-3 max-sm:gap-1'>
                <p>Web Developer</p>
                <p>|</p>
                <p>Engineer</p>
            </div>
        </div>
    )
}