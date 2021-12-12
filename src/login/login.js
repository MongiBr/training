import { useState, useEffect, useContext } from 'react';
import './login.css';
import data from '../data/data';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../context/authContext';

export default function Login() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [error, setError] = useState('');

	const auth = useContext(AuthContext);

	let router = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, pass);

		data.map((user) => {
			if (user.email == email && user.password == pass) {
				localStorage.setItem('connected', user.id);
				let id = user.id;
				auth.setUser({ id });
				router.push('/');
			} else {
				setError('Verify your informations!');
			}
		});
	};

	return (
		<>
			<form className="container-login">
				<div className="form-cont">
					<h1>Log In</h1>
					{error ? (
						<div
							className="alert alert-danger"
							role="alert"
						>
							{error}
						</div>
					) : null}
					<div className=" mb-3">
						<label
							for="exampleInputEmail1"
							class="form-label"
						>
							Email address
						</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							onChange={(e) =>
								setEmail(
									e.target
										.value
								)
							}
						/>
					</div>
					<div class="mb-3">
						<label
							for="exampleInputPassword1"
							class="form-label"
						>
							Password
						</label>
						<input
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							onChange={(e) =>
								setPass(
									e.target
										.value
								)
							}
						/>
					</div>
					<div class="mb-3 form-check">
						<input
							type="checkbox"
							class="form-check-input"
							id="exampleCheck1"
						/>
						<label
							class="form-check-label"
							for="exampleCheck1"
						>
							Check me out
						</label>
					</div>
					<button
						type="submit"
						class="btn btn-submit"
						onClick={(e) => handleSubmit(e)}
					>
						Submit
					</button>
				</div>
			</form>
		</>
	);
}
