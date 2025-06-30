
import kind from '@enact/core/kind';
import Spottable from '@enact/spotlight/Spottable';
import PropTypes from 'prop-types';

import css from './Kitten.module.less';
import {getPictureUrlHW} from '../../picsource';
import Image from '@enact/sandstone/Image';


const KittenBase = kind({
	name: 'Kitten',

	propTypes: {
		children: PropTypes.string,
		index: PropTypes.number,
		onSelect: PropTypes.func,
		size: PropTypes.number
	},

	defaultProps: {
		size: 300
	},

	styles: {
		css,
		className: 'kitten'
	},

	handlers: {
		handleClick: (ev, {index, onSelect}) => {
			if (onSelect) {
				onSelect({index});
			}
		}
	},

	computed: {
		url: ({index, size}) => {
			return getPictureUrlHW({id:index, width:size,height: size});
		}
	},

	render: ({children, handleClick, size, url, ...rest}) => {
		delete rest.index;
		delete rest.onSelect;
		

		return (
			<div {...rest} onClick={handleClick} role='button'>
				<Image src={url} alt="Kitten" width={size} height={size} />
				<div>{children}</div>
			</div>
		);
	}
});

const Kitten = Spottable(KittenBase);

export default Kitten;
export {
	Kitten,
	KittenBase
};



//Why in gods name

// import React, {forwardRef} from 'react';
// import PropTypes from 'prop-types';
// import Spottable from '@enact/spotlight/Spottable';
// import Image from '@enact/sandstone/Image';
// import css from './Kitten.module.less';
// import {getPictureUrlHW} from '../../picsource';

// // Forwarding ref is important for Spotlight to focus correctly
// const KittenBase = forwardRef(function KittenBase(
// 	{index, size = 300, onSelect, children, ...rest},
// 	ref
// ) {
// 	const url = getPictureUrlHW({id: index, width: size, height: size});

// 	const handleClick = () => {
// 		if (onSelect) {
// 			console.log(`kitten-${index}`)
// 			onSelect({index});
// 		}
// 	};

// 	return (
// 		<div
// 			{...rest}
// 			ref={ref}
// 			className={css.kitten}
// 			onClick={handleClick}
// 			tabIndex="-1"
// 			role="button"
// 			data-spotlight-id={`kitten-${index}`}// 🔥 helps with targeting
// 		>
// 			<Image src={url} width={size} height={size} alt={`Kitten ${index}`} />
// 			<div>{children}</div>
// 		</div>
// 	);
// });

// KittenBase.propTypes = {
// 	index: PropTypes.number.isRequired,
// 	size: PropTypes.number,
// 	onSelect: PropTypes.func,
// 	children: PropTypes.string
// };

// // 💡 This version of Spottable works only if the ref is forwarded
// const Kitten = Spottable(KittenBase);

// export default Kitten;
// export {Kitten, KittenBase};



