import Spottable from "@enact/spotlight/Spottable";
import BodyText from '@enact/sandstone/BodyText';
import css from './SpotText.module.less';
import PropTypes from 'prop-types';
import {forwardRef} from 'react';
import Button from "@enact/sandstone/Button";

const BaseText = forwardRef(function BaseText({displayText = "TestTextDisplay", functionPassed, ...rest}, ref) {

    const nani = () =>{
        console.log("Function called");
        functionPassed();
    };

	return (
		// <div
		// 	ref={ref}
		// 	className={css.basetext}
		// 	tabIndex="-1"
		// 	role="button"
		// 	onClick={nani}
		// 	{...rest}
		// >
		// 	<Button {...rest} onClick={nani}>{displayText}</Button>
		// </div>
		<Button onClick={nani}>
			<div className={css.basetext}>
				{displayText}
			</div>
		</Button>
	);
});

BaseText.propTypes = {
	displayText: PropTypes.string,
	functionPassed: PropTypes.func,

};

const SpotText = Spottable(BaseText);

export default SpotText;