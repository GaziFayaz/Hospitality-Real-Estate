/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			console.log(loggedInUser);
			setUser(loggedInUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const createUserEmailPassword = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signInEmailPassword = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const customizeProfile = (displayName, photoURL) => {
		// setLoading(true)
		return updateProfile(auth.currentUser, {
			displayName: displayName,
			photoURL: photoURL,
		});
	};

	const signInGoogle = () => {
    setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const logout = () => {
		setLoading(true);
		return signOut(auth);
	};

	const authInfo = {
		user,
		loading,
		setLoading,
		createUserEmailPassword,
		signInEmailPassword,
		customizeProfile,
		signInGoogle,
		logout,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
