import React from "react";
import piggy from "../assets/porco.png"; // Ensure this path is correct

const Nav = () => {
    return (
        <nav>
            <div className="navWrapper">
                <span className="headerText">HogWild</span>
                <div className="TwirlyPig">
                    <img src={piggy} className="App-logo" alt="Piggy" />
                </div>
                <span className="normalText">
                    A React App for County Fair Hog Fans
                </span>
            </div>
        </nav>
    );
};

export default Nav;