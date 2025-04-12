import React, {useState} from "react";
import './card.css';

export default function Card(props){
    const [activeOption, setOption] = useState(props.options[0]);
    return(
        <div className={'card__container'}>
            <div className={'card__img-container'}>
                <img className={'card__img'} src={activeOption.img} alt={props.name}/>
            </div>
            <h2 className={'card__name'}>{props.name}</h2>
            <h2 className={'card__set'}>Set of {props.set} – <span className={'card__price'}>{props.price}</span></h2>
            <p className={'card__description'}>{props.description}</p>
            <ul className={'card__colors'}>
                {
                    props.options.map((option, index) => (
                        <li
                            key={index}
                            className={'card__option'}
                            style={{backgroundColor: option.color,
                                    border: option.color === activeOption.color ? '4px solid #6E6259' : 'none'
                        }} onClick={() => setOption(option)}>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}