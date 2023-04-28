import React from "react";
import { Nav, NavLink, NavMenu }
    from "./navBarElements";

const Navbar = () => {
    return (
        <div className="NavBar">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">ATLA API</a>
                    </div>
                    <ul class="nav navbar-nav">

                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/q1" activeStyle>
                        Q1
                    </NavLink>
                    <NavLink to="/q2" activeStyle>
                        Q2
                    </NavLink>
                    <NavLink to="/q3" activeStyle>
                        Q3
                    </NavLink>
                    <NavLink to="/q4" activeStyle>
                        Q4
                    </NavLink>
                    <NavLink to="/q5" activeStyle>
                        Q5
                    </NavLink>
                    <NavLink to="/q6" activeStyle>
                        Q6
                    </NavLink>
                    <NavLink to="/q7" activeStyle>
                        Q7
                    </NavLink>
                    <NavLink to="/q8" activeStyle>
                        Q8
                    </NavLink>
                    <NavLink to="/q9" activeStyle>
                        Q9
                    </NavLink>
                    <NavLink to="/q10" activeStyle>
                        Q10
                    </NavLink>
                    </ul>
                </div>
            </nav >
        </div >

    );
};

export default Navbar;