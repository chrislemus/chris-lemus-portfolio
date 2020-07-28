import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <header className="header">
            <div className="bounds">
                <h1 className="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                    <React.Fragment>
                        <Link className="signup" to="/signup">Sign Up</Link>
                        <Link className="signin" to="/signin">Sign In</Link>
                    </React.Fragment>
                </nav>
            </div>
        </header>
    );
 }