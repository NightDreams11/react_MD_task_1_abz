import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}





// import React, {useState, useEffect, useRef} from 'react'
//
//
// const InputMask = () => {
//     const [card, setCard] = useState();
//     const inputCard = useRef();
//
//     const handleChange = () => {
//         const cardValue = inputCard.current.value
//             .replace(/\D/g, '')
//             .match(/(\d{1,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
//         inputCard.current.value = !cardValue[2]
//             ? cardValue[1]
//             : `${cardValue[1]}-${cardValue[2]}
//       ${(`${cardValue[3] ? `-${cardValue[3]}` : ''}`)}
//       ${(`${cardValue[4] ? `-${cardValue[4]}` : ''}`)}`;
//     };
//
//     useEffect(() => {
//         handleChange();
//     }, [card])
//
//     return (
//         <>
//             <input type="text" ref={inputCard} ref={inputCard} onChange={handleChange} />
//         </>
//     );
// }
//
// export default InputMask;