import React from "react"
import searchIcon from "../../assets/search.png"
import notifIcon from "../../assets/notif.png"
import messageIcon from "../../assets/email.png"
import "../navbar/navbar.css"

export default function Navbar(){
    return(
        <div className="mainNavbar">
            <div className="logoContainer">
                <p>PetnerSocial</p>
            </div>
            <div className="searchBoxContainer">
                <img src={searchIcon} alt="" className="icons"/>
                <input type="text" name="" id="" className="searchBar"placeholder="search your friends here"/>
            </div>
            <div className="iconContainer">
                <img src={notifIcon} alt="notif" className="icons"/>
                <img src={messageIcon} alt="message"className="icons"/>
            </div> 
            <div className="profileContainer">
                <img src="" alt="" className="profileIcon"/> 
                <p>UsernameHere</p>
            </div>
        </div>
    )
}