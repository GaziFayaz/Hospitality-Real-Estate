import { createContext, useEffect, useState } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			console.log(loggedInUser);
			setUser(loggedInUser);
		});
		return () => unsubscribe();
	}, []);

	const createUserEmailPassword = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

  const logout = () => {
    return signOut(auth);
  }

	const authInfo = {
		user,
		createUserEmailPassword,
    logout,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
