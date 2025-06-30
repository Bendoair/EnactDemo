import {Panel, Header} from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

import Kitten from '../components/Kitten';
import Button from '@enact/ui/Button';
import Spottable from '@enact/spotlight/Spottable';
import { useEffect } from 'react';
import Spotlight from '@enact/spotlight';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';
import css from '../components/Kitten/Kitten.module.less';
import AltKitten from '../components/Kitten/AltKitten';

const FocusContainer = SpotlightContainerDecorator("div");

function List({handleNavAndIndex, children}) {
	const navigate = useNavigate();
	const { logout } = useAuth();
	const [isLoggingOut, setIsLoggingOut] = useState(false);
	const [logoutError, setLogoutError] = useState(null);

	console.log("List got children data: ", children)

	const handleLogOut = async () => {
		setIsLoggingOut(true);
		setLogoutError(null);
		try {
			await logout();
			navigate('/login');
		} catch (err) {
			console.error('Logout failed:', err);
			setLogoutError('Failed to log out. Please try again.');
		} finally {
			setIsLoggingOut(false);
		}
	};


	return (
		<Panel closeButtonAriaLabel="Log out" noBackButton onClose={handleLogOut}>
			<Header title="Kittens!" />
			{logoutError && <p>{logoutError}</p>}
			<Scroller>
				<Repeater
					childComponent={AltKitten}
					indexProp="index"
					itemProps={{onSelect: handleNavAndIndex}}
					className={css.grid}
				>
					{children.map((kitten) => ({
						key: kitten.id,
						children
					}))}
				</Repeater>
			</Scroller>

		</Panel>


	);
}

List.propTypes = {
	children: PropTypes.arrayOf(PropTypes.object)
};



export default List;
