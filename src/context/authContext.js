import { createContext, useEffect, useState } from 'react';
import data from '../data/data';
export const AuthContext = createContext();
export function AuthProvider(props) {
	const [user, setUser] = useState({});

	useEffect(() => {
		let id = localStorage.getItem('connected');
		data.map((user) => {
			if (user.id == id) {
				setUser(user);
			}
		});
		console.log(user);
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{props.children}
		</AuthContext.Provider>
	);
}
