import React, { useState } from "react";
import './design.css';
import designImg from './assets/designImg.png';

export default function Design() {
    const [currentColor, setColor] = useState('#595752');

    const optionData = [
        { id: 1, color: '#E09D81', img: '#', alt: 'new model' },
        { id: 2, color: '#748EA1', img: '#', alt: 'new model' },
        { id: 3, color: '#B76D47', img: '#', alt: 'new model' },
        { id: 4, color: '#7D836E', img: '#', alt: 'new model' },
        { id: 5, color: '#C33636', img: '#', alt: 'new model' },
        { id: 6, color: '#CDC7B3', img: '#', alt: 'new model' },
        {  id: 7,
            color: '#595752',
            img: designImg,
            alt: 'new model',
            points: [
                { top: '20%', left: '8%', text: 'Modular lid to release & trap steam' },
                { top: '18%', left: '80%', text: 'Beechwood spatula & built-in spoon rest' },
                { top: '50%', left: '55%', text: '2 easy-pour spouts' },
                { top: '70%', left: '15%', text: 'Nesting steamer basket & colander' },
                { top: '68%', left: '86%', text: 'Exclusive, ceramic nonstick made without PFOAs & PTFEs' },
                { top: '90%', left: '40%', text: 'Stay cool handle' },
            ]},
        { id: 8, color: '#D3C2CA', img: '#', alt: 'new model' },
    ];

    return (
        <div className="design">
            <h2 className="design__title">Designed for Everything and Always</h2>

            <ul className="design__options">
                {optionData.map(item => (
                    <li
                        key={item.id}
                        className={`design__option ${currentColor === item.color ? 'design__option--active' : ''}`}
                        style={{ backgroundColor: item.color }}
                        onClick={() => setColor(item.color)}
                    />
                ))}
            </ul>

            <div className="design__image-container">
                {optionData.map(item => (
                    item.color === currentColor && (
                        <div className="design__image-wrapper" key={item.id}>
                            <img src={item.img} alt={item.alt} className="design__image" />
                            {item.points && item.points.map((point, index) => (
                                <div
                                    key={index}
                                    className="design__point"
                                    style={{ top: point.top, left: point.left }}
                                >
                                    <span className="design__tooltip">{point.text}</span>
                                </div>
                            ))}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}