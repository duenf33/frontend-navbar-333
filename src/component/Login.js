import axios from "axios";
import React, { Component } from "react";
import "./SignUp/SignUp.css";

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			isError: false,
			errorObj: {},
		};
	}
	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleOnSubmit = async (event) => {
		event.preventDefault();
		let { email, password } = this.state;
		try {
			let result = await axios.post("http://localhost:3001/users/login", {
				email,
				password,
			});
		} catch (e) {
			console.log(e);
		}
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className="form-body">
				<main className="form-signin">
					{/* {isError && this.showErrorMessageObj()} */}
					<form onSubmit={this.handleOnSubmit}>
						<h1 className="h3 mb-3 fw-normal">Please Login</h1>
						<label htmlFor="inputEmail" className="visually-hidden">
							Email address
						</label>
						<input
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required
							autoFocus
							name="email"
							value={email}
							onChange={this.handleOnChange}
						/>
						<label htmlFor="inputPassword" className="visually-hidden">
							Password
						</label>
						<input
							//type="password"
							type="text"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
							name="password"
							value={password}
							onChange={this.handleOnChange}
						/>
						<button className="w-100 btn btn-lg btn-primary" type="submit">
							Enter
						</button>
					</form>
				</main>
			</div>
		);
	}
}

export default Login;
