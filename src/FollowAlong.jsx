import React from "react";
import follow1 from './assets/follow1.png';
import follow2 from './assets/follow2.png'
import './followAlong.css'

export default function FollowAlong(){
    return(
        <div className={'follow'}>
            <img className={'follow__image'} src={follow1} alt=""/>
            <div className={'follow__content'}>
                <p className={'follow__content-text'}>#DirtyDishes</p>
                <h2 className={'follow__content-header'}>A full sink is a sign of a great night. <br/> You wash, we'll dry.</h2>
                <button className={'follow__content-btn'}> Follow Along</button>
            </div>
            <img className={'follow__image'} src={follow2} alt=""/>
        </div>
    )
}