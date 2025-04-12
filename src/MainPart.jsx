import React from "react";
import Symbols from './assets/Symbols.svg';
import Frame from './assets/Frame.png';
import client1 from './assets/client1.png';
import client2 from './assets/client2.png';
import client3 from './assets/client3.png';
import client4 from './assets/client4.png';
import './index.css';
export default function MainPart() {
    return (
        <>
            <div className="main">
                <div className="main__ads">SHIPPING AND RETURNS ARE ALWAYS FREE FROM OUR PLACE TO YOURS 🙂</div>
                <div className="main__menu menu">
                    <ul className="menu__list menu__list--left">
                        <li className="menu__item">SHOP</li>
                        <li className="menu__item">Always Pan</li>
                    </ul>
                    <img className="menu__logo" src={Symbols} alt="Logo"/>
                    <ul className="menu__list menu__list--right">
                        <li className="menu__item">Mission</li>
                        <li className="menu__item">FAQs</li>
                        <li className="menu__item">
                            <img className="menu__frame" src={Frame} alt="Frame"/>
                        </li>
                    </ul>
                </div>

                <div className="main__info info">
                    <div className="info__content">
                        <p className="info__text">Meet The Always Pan</p>
                        <h1 className="info__title">
                            Your new <br/> <span className="info__highlight">skillet</span>
                        </h1>
                        <button className="info__button">Shop the Always Pan</button>
                    </div>
                </div>
            </div>

            <div className="clients">
                <h2 className="clients__header">
                    "DOING THE JOB OF EIGHT TRADITIONAL COOKWARE PIECES"
                </h2>
                <ul className="clients__list">
                    <li className="clients__item"><img className="clients__image" src={client1} alt="Client 1"/></li>
                    <li className="clients__item"><img className="clients__image" src={client4} alt="Client 4"/></li>
                    <li className="clients__item"><img className="clients__image" src={client3} alt="Client 3"/></li>
                    <li className="clients__item"><img className="clients__image" src={client2} alt="Client 2"/></li>
                </ul>
            </div>

            <div className="welcoming">
                <h2 className="welcoming__title">
                    Welcome to Our <br/> Place
                </h2>
                <p className="welcoming__text">
                    At Our Place, we believe in the power of home-cooking to bring people together.
                    Our collections are new heirlooms from the cultures and places that make up the
                    fabric of the modern multi-ethnic kitchen. We design thoughtfully, source ethically,
                    and produce sustainably because what we make is connected to one another and the earth we share.
                </p>
            </div>
        </>
    );
}
