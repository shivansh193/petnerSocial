import React from "react"
import Navbar from "../../components/navbar/navbar"
import ContentPost from "../../components/contentPostContainer/contentPost"
import "./home.css"
import LeftBar from "../../components/leftSideContainer/leftBar"
import RightBar from "../../components/rightSideContainer/rightSideContainer"
import MainPost from "../../components/mainPostContainer/mainPostContainer"


export default function Home(){
    return(
        <div className="home">
        <Navbar />
        <div className="componentContainer">
       
        <LeftBar />
        <RightBar />
        <MainPost />
        </div>
        </div>
    )
}