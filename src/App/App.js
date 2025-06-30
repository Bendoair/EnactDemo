import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Changeable from '@enact/ui/Changeable';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Detail from '../Views/Detail';
import List, { HmmList } from '../Views/List';
import LoginPanel from '../components/Auth/LoginPanel';
import SignupPanel from '../components/Auth/SignupPanel';
import { useState } from 'react';
import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';
import { useEffect } from 'react';
import SpotText from '../components/SpotText/SpotText';
import Popup from '@enact/sandstone/Popup';
import Button from '@enact/sandstone/Button';
import { getData } from '../data/datasource';


function AppBase({...rest}) {

	const navigate = useNavigate();
	const [kittenIndex, setKittenIndex] = useState(0);
	const [alertOn, setAlertOn] = useState(false);
	const [kittens, setKittens] = useState([]);

	const loadKittens = async () => {
		let data = await getData({dbname: "kittens"});
		console.log(data);
		setKittens(data);
	};

	useEffect(()=>{
		loadKittens()
		
	}, []);

	const handleNavAndIndex = ({index}) => {
		setKittenIndex(index);
		navigate(`/details/${index}`);
	}

	const showAlert = async () =>{
		await getData({dbname: "kittens"});
		setAlertOn(!alertOn);
	};

	return (
		<div {...rest}>
			<Routes >
				<Route path="/signup" element={<SignupPanel />} />
				<Route path="/login" element={<LoginPanel />} />
				<Route path="/list" element={<List handleNavAndIndex={handleNavAndIndex}>{kittens}</List>} />
				<Route path="/details/:kittenIndex" element={<Detail {...(kittens[kittenIndex])} />} />
				<Route path="*" element={<Navigate to={"/login"}/>} />
			</Routes>
		</div>
		// <div {...rest}>
		// 	{alertOn &&
		// 		<p>Hmmmmmmmm</p>
		// 	}
		// 	<Button onClick={showAlert}>Whatever the fuck?</Button>
		// </div>
	);
}



const AppContainer = props => {
  	// const { user } = useAuth();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!user && window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
	// 		navigate('/login', { replace: true });
	// 	} else if (user && window.location.pathname === '/') {
	// 		navigate('/list', { replace: true });
	// 	}
	// }, [user, navigate]);

  	return <AppBase {...props} />;
};

const App = ThemeDecorator(SpotlightRootDecorator(AppContainer));
//const App = SpotlightRootDecorator(AppContainer);

export default App;
export { App, AppBase };



