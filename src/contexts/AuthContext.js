import { createContext, useContext, useEffect, useState } from 'react';
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider

} from 'firebase/auth';
import {auth, provider} from "../firebase"


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
	const googleLogin = () => {
		signInWithPopup(auth, provider)
			.then((result) =>{
				const credential = GoogleAuthProvider.credentialFromResult(result);
				console.log(credential);
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage)
			});
	}
	const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
	const logout = () => signOut(auth);

	const value = { user, login, register, logout, googleLogin };

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}

// 🚀 Hook to use auth
export const useAuth = () => useContext(AuthContext);