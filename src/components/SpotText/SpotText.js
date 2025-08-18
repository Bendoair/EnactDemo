import {Spottable} from "@enact/spotlight/Spottable";
import BodyText from '@enact/sandstone/BodyText';
import css from './SpotText.module.less';
import PropTypes from 'prop-types';
import {forwardRef} from 'react';
import Button from "@enact/sandstone/Button";

const BaseText = ({onClick, displayText = "TestTextDisplay", ...rest}) => {
	return (
		<div
			className={css.basetext}
			role="button"
			onClick={onClick}
			{...rest}
		>
			displayText
		</div>

	);
};

const SpotText = Spottable(BaseText);

BaseText.propTypes = {
	displayText: PropTypes.string,
	functionPassed: PropTypes.func,

};


//const SpotText = BaseText;

export default SpotText;