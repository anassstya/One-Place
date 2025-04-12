import React from "react";
import './footer.css'

export default function Footer(){
    return(
        <div className={'footer'}>
            <div className={'footer__info'}>
                <h2 className={'footer__info-header'}>Keep in touch ☺</h2>
                <p className={'footer__info-text'}>Be the first to know about new collections, special events, and what’s going on at Our Place.</p>
                <form className={'footer__info-form'} action="">
                    <input className={'footer__info-input'} placeholder={'Your email'} type="text"/>
                    <button className={'footer__info-btn'} type={"submit"}>Submit</button>
                </form>
            </div>
            <div className={'footer__socials'}>
                <Socials title={'Shop'}>
                    <li className={'socials__item'}>Main Plates</li>
                    <li className={'socials__item'}>Side Bowls</li>
                    <li className={'socials__item'}>Drinking Glasses</li>
                    <li className={'socials__item'}>Family Dinner Bundle</li>
                </Socials>
                <Socials title={'Company'}>
                    <li className={'socials__item'}>Mission</li>
                    <li className={'socials__item'}>FAQs</li>
                    <li className={'socials__item'}>Contact Us</li>
                    <li className={'socials__item'}>Returns</li>
                    <li className={'socials__item'}>Bulk Orders</li>
                    <li className={'socials__item'}>Careers</li>
                </Socials>
                <Socials title={'Social'}>
                    <li className={'socials__item'}>Instagram</li>
                    <li className={'socials__item'}>Twitter</li>
                </Socials>
            </div>
        </div>
    )
}

function Socials({title, children}){
    return(
       <div className={'socials__container'}>
           <h5 className={'socials__header'}>{title}</h5>
           <ul className={'socials__items'}>
               {children}
           </ul>
       </div>
    )
}