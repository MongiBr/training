import { useContext, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Header() {
	const [nom, setNom] = useState('');
	const auth = useContext(AuthContext);
	let router = useHistory();
	function logout(e) {
		auth.setUser({});
		localStorage.removeItem('connected');
		router.push('/login');
	}

	return (
		<nav className="navbar  ">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					React Training
				</Link>
				{auth.user.id ? (
					<div>
						<Link
							to="/"
							className="navLink"
						>
							Home
						</Link>
						<Link
							to="/profile"
							className="navLink"
						>
							{auth.user.nom}
						</Link>
						<button
							className="btn btn-danger btn-sm"
							onClick={(e) =>
								logout(e)
							}
							style={{
								marginLeft: '20px',
							}}
						>
							Logout
						</button>
					</div>
				) : (
					<Link to="/login">
						you need to log in
					</Link>
				)}
			</div>
		</nav>
	);
}
