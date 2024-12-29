import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ name, progress, borderColor = '#4caf50', progressColor = '#4caf50', size = 100 }) => {
    const stroke = 15;
    const normalizedRadius = size - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const svgStyle = {
        transform: 'rotate(-90deg)',
        overflow: 'visible',
    };

    const circleBgStyle = {
        stroke: '#e6e6e6',
        fill: 'transparent',
        strokeWidth: stroke,
    };

    const circleFgStyle = {
        stroke: progressColor,
        fill: 'transparent',
        strokeWidth: stroke,
        strokeDasharray: circumference,
        strokeDashoffset: circumference, // Start with full offset
        transition: 'stroke-dashoffset 1s ease-in-out', // Add transition for animation
        transformOrigin: '50% 50%',
    };

    useEffect(() => {
        const circle = document.querySelector(`#circle-${name}`);
        if (circle) {
            circle.style.strokeDashoffset = strokeDashoffset; // Animate to the target offset
        }
    }, [strokeDashoffset, name]);

    const containerStyle = {
        position: 'relative',
        display: 'inline-block',
        width: `${size * 2 + 40}px`,
        height: `${size * 2 + 40}px`,
        border: `3px solid ${borderColor}`,
        borderRadius: '15px',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: '#f8f9fa',
    };

    const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontSize: '1.2rem',
    };

    return (
        <div style={containerStyle} className='border rounded shadow'>
            <svg height={size * 2} width={size * 2} style={svgStyle}>
                <circle
                    cx={size}
                    cy={size}
                    r={normalizedRadius}
                    style={circleBgStyle}
                />
                <circle
                    id={`circle-${name}`} // Add unique ID for each circle
                    cx={size}
                    cy={size}
                    r={normalizedRadius}
                    style={circleFgStyle}
                    strokeLinecap="round"
                />
            </svg>
            <div style={textStyle}>
                <strong>{progress}%</strong>
                <p style={{ fontSize: '1.2rem' }}>{name}</p> {/* Reduced font size */}
            </div>
        </div>
    );
};

export default Card;