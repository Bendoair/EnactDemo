import {Header, Panel} from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const genders = {
	0: 'Male',
	1: 'Female'
};



const DetailBase = ({color = 'Orange', gender = 1, name = 'Unnamed Kitten', weight = 2.5, ...rest}) => {
	const navigate = useNavigate();
	const handleBack = () => {
		navigate('/list')
	};

	return (
		<Panel onBack={handleBack} onClose={handleBack} {...rest}>
			<Header title={name} />
			<div>Gender: {genders[gender]}</div>
			<div>Color: {color}</div>
			<div>Weight: {weight}kg</div>
		</Panel>
	)
};

DetailBase.propTypes = {
	color: PropTypes.string,
	gender: PropTypes.number,
	name: PropTypes.string,
	weight: PropTypes.number
};

export default DetailBase;
export {
	DetailBase as Detail,
	DetailBase
};