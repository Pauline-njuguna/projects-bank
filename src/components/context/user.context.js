import { useContext, createContext, useState } from "react";

const UserContext = createContext({
	currentUser: undefined,
	setUser: () => {
		return;
	},
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(undefined);

	const setUser = (user) => {
		setCurrentUser(user);
	};

	return <UserContext.Provider value={ { currentUser, setUser } }>
		{ children }
	</UserContext.Provider>;
};

export const useUser = () => {
	return useContext(UserContext);
};

export const UserConsumer = ({ children }) => {
	return <UserContext.Consumer>
		{ (currentUser) => currentUser && children }
	</UserContext.Consumer>;
};
