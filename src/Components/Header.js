import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>MovieCity</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Movies</a></li>
                    <li><a href="/">Category</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button" className="but">Login</button>
                <button type="button" className="but">Signup</button>
            </div>
        </div>
    );
}
export default Header;