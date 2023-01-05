import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Navbar">
           <div  className="navLeft">
            Recipe Book
           </div>
           <div className="navRight">
            <ul>
                <li> <Link to="/"> Home </Link> </li>
                <li> <a target="_blank" rel="noreferrer" href="https://resplendent-melomakarona-1c95e0.netlify.app/"> Portfolio </a> </li>
                <li> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/charlesvaldez_/"> Instagram </a> </li>
                <li> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/charles-valdez-293ba5258/"> LinkedIn </a> </li>
            </ul>
           </div>
        </div>
    )
}

export default Navbar