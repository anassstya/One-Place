import React, { useState } from "react";
import './collections.css';
import Card from "./Card.jsx";
import {collectionData} from './collectionData.jsx'

export default function Collections(){
    return(
        <div className={'collection'}>
            <h2 className={'collection__header'}>From curated essentials to <br/> limited-run editions.</h2>
            <p className={'collection__text'}>We make products inspired by traditions – and we're <br/> starting with one you might be familiar with: Dinner.</p>
            <div className="collection__items">
            {collectionData.map(item => (
                <Card
                    key={item.id}
                    name={item.name}
                    set={item.set}
                    price={item.price}
                    description={item.description}
                    options={item.options}
                />
            ))}
        </div>
        </div>
    )
}