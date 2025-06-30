
import kind from '@enact/core/kind';
import Spottable from '@enact/spotlight/Spottable';
import PropTypes from 'prop-types';

import css from './Kitten.module.less';
import {getPictureUrlHW} from '../../picsource';
import Image from '@enact/sandstone/Image';
import {ImageItem} from '@enact/sandstone/ImageItem';
import Button from '@enact/ui/Button';


const genders = {
	0: 'Male',
	1: 'Female'
};

const AltKittenBase = ({children, index, onSelect, ...rest}) => {
    if(!children) return null;
    const { name, color, weight, gender } = children[index];
    console.log("AltKittenBase got children data: ", children)

    return (
    <ImageItem 
        src={getPictureUrlHW({id: index, width: 300, height: 300})}
        onClick={() => onSelect?.({index})}
        caption={name}
        label={`${genders[gender]} kittycat, ${color}`}
        css={css}
        {...rest}
    >
        
    </ImageItem>)

}

const AltKitten = Spottable(AltKittenBase);

export default AltKitten;
export {
	AltKitten,
	AltKittenBase
};




