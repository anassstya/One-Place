import React from "react";
import MainPart from "./MainPart.jsx";
import Design from "./Design.jsx";
import Collections from "./Collections.jsx";
import FollowAlong from "./FollowAlong.jsx";
import Footer from "./Footer.jsx";

export default function App(){
    return(
        <>
            <MainPart />
            <Design></Design>
            <Collections></Collections>
            <FollowAlong></FollowAlong>
            <Footer></Footer>
        </>
    )
}