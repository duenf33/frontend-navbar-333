import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
	return (
		<nav>
			<header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
				<p className="h5 my-0 me-md-auto fw-normal">
					<Link to="/">
						<i className="fas fa-film"></i>
					</Link>
				</p>
				<nav className="my-2 my-md-0 me-md-3">
					<NavLink
						exact
						className="p-2"
						// activeStyle={{ color: "red" }}
						activeClassName="active-class-style"
						to="/">
						Home
					</NavLink>
					<NavLink
						activeStyle={{ color: "yellow" }}
						className="btn btn-outline-primary"
						to="/sign-up">
						Sign up
					</NavLink>
					<NavLink
						activeStyle={{ color: "yellow" }}
						className="btn btn-outline-primary"
						to="/login">
						Login
					</NavLink>
				</nav>
			</header>
		</nav>
	);
}

export default Navbar;
