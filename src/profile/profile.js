import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';

import './profile.css';

function Profile() {
	const [user, setUser] = useState({});
	const auth = useContext(AuthContext);

	useEffect(() => {
		if (auth.user) {
			setUser(auth.user);
		}
		console.log(auth.user);
	}, []);

	return (
		<div className="profile">
			<h1 className="row">Profile Details </h1>
			<div className="row">
				<div className="col-3 sm-6">
					<span>
						<strong> Full Name</strong>
					</span>
				</div>
				<div className="col-6">
					{user.nom + ' ' + user.prenom}
				</div>
			</div>
			<div className="row">
				<div className="col-3 sm-6">
					<span>
						<strong>Email</strong>
					</span>
				</div>
				<div className="col-6">{user.email}</div>
			</div>
			<div className="row">
				<div className="col-3 sm-6">
					<span>
						<strong>Phone Number</strong>
					</span>
				</div>
				<div className="col-6">
					{' +216 ' + user.phone}
				</div>
			</div>
		</div>
	);
}
export default Profile;
