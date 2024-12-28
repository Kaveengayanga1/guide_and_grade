import React from 'react';

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
        strokeDashoffset: strokeDashoffset,
        transition: 'stroke-dashoffset 0.35s',
        transformOrigin: '50% 50%',
    };

    const containerStyle = {
        position: 'relative',
        display: 'inline-block',
        width: `${size * 2 + 40}px`,
        height: `${size * 2 + 40}px`,
        border: `3px solid ${borderColor}`,
        borderRadius: '15px',
        padding: '20px',
        backgroundColor: 'white',
    };

    const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontSize: '1.3rem',
        
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
                    cx={size}
                    cy={size}
                    r={normalizedRadius}
                    style={circleFgStyle}
                    strokeLinecap="round"
                />
            </svg>
            <div style={textStyle}>
                <strong>{progress}%</strong>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Card;
