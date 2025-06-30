import { createContext, useContext, useEffect, useState } from 'react';
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword
} from 'firebase/auth';
import {auth} from "../firebase"


// 📦 Auth Context
const AuthContext = createContext();

// ✅ Auth Provider Component
export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
	const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
	const logout = () => signOut(auth);

	const value = { user, login, register, logout };

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}

// 🚀 Hook to use auth
export const useAuth = () => useContext(AuthContext);